

# Context-Based Email Response (QwikMail)

## Frontend Development (React.js & Tailwind CSS)

To create the user interface for **QwikMail**, we use **React.js** as the frontend framework.

1. **Setting up React App**  
   The command to create the basic React application structure is:
   ```bash
   npx create-react-app email-response
   ```
   This will generate a basic structure of files and dependencies required for the application.

2. **Styling with Tailwind CSS**  
   For styling the application, we use **Tailwind CSS** to make the page more attractive and responsive.

   - To install Tailwind, use the following command:
     ```bash
     npm install -D tailwindcss
     ```

   - Next, configure the **`tailwind.config.js`** file according to the Tailwind setup guidelines.

3. **Routing in React**  
   We have set up basic routing for the application within the **MainApp.js** component to navigate between different views of the app.

4. **Application Header**  
   A custom header has been created, featuring the **QwikMail** logo, to make the app more intuitive and user-friendly.

5. **Gmail Authentication with OAuth 2.0**  
   To allow users to access their Gmail accounts and interact with emails, we implemented **Google OAuth 2.0 Authentication**.

   - The following command is used to install the required library to integrate Gmail API with OAuth:
     ```bash
     npm install @react-oauth/google@latest
     ```

   - We then imported the necessary libraries related to Google APIs for Gmail integration.

6. **Google Sign-In Button**  
   A **Sign-In** button was created for Gmail login, using the OAuth 2.0 API.

   - The **Sign-In** process is handled through React state variables that store the user's authentication tokens and profile data.

7. **Axios for API Requests**  
   To facilitate communication between the frontend and the backend, we use **Axios** to make HTTP requests and pass user data to the backend. We installed the required Axios version:
   ```bash
   npm install axios@0.21.1
   ```

8. **Global State Management with React Context**  
   React Context was used to manage global state throughout the application, specifically for storing and accessing user data (such as email account details) across different components.

9. **Sign-In and Sign-Out Functionality**  
   We implemented **Sign-In** and **Sign-Out** functions to allow users to authenticate with their Google account and to sign out securely when needed.

---

## Preprocessing

The preprocessing step is critical to prepare the email data before it is classified or used for response generation. It involves cleaning, tokenizing, and structuring the email text for NLP tasks.

1. **Data Collection**  
   The **synthetic dataset** is collected, which includes email-related columns: Sender Name, Recipient Name, Subject, Email Body, Email Category, Intent, Sentiment, Keywords, and Suggested Response. The data is collected either manually or using an automated script that fetches emails from the Gmail API.

2. **Text Cleaning**  
   The raw email body is cleaned by removing unwanted characters, extra spaces, and formatting issues (e.g., HTML tags, special characters). This ensures the text is ready for tokenization.

3. **Tokenization**  
   After cleaning, the email body is tokenized into words or sub-words to process the text effectively. Tokenization is essential to convert the email text into a format that can be understood by machine learning models.

4. **Stop Word Removal**  
   Common words that don't contribute much meaning (like "and," "the," "is," etc.) are removed to focus on more meaningful words during classification and response generation.

