import pandas as pd
import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from sklearn.preprocessing import LabelEncoder
nltk.data.path.append(r"C:\Users\yanna\nltk_data")
nltk.download('punkt', download_dir=r"C:\Users\yanna\nltk_data")
nltk.download('punkt_tab')
nltk.download('stopwords')

# Load dataset
df = pd.read_csv(r"C:\Users\yanna\email-response-system\context_based_email_dataset_natural_500.csv", encoding="ISO-8859-1")


# Remove special characters and convert to lowercase
def clean_text(text):
    text = re.sub(r'\W+', ' ', text)  # Remove special characters
    text = text.lower()  # Convert to lowercase
    return text

df["cleaned_body"] = df["Email Body"].apply(clean_text)

# Tokenization
df["tokens"] = df["cleaned_body"].apply(lambda x: word_tokenize(x))

# Remove stopwords
stop_words = set(stopwords.words("english"))
df["tokens"] = df["tokens"].apply(lambda x: [word for word in x if word not in stop_words])

# Convert categorical labels into numbers
label_encoder = LabelEncoder()
df["Category_Label"] = label_encoder.fit_transform(df["Email Category"])

# Save the preprocessed dataset
df.to_csv("processed_email_dataset.csv", index=False)

print("✅ Preprocessing complete! Cleaned data saved.")
