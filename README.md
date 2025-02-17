

# Context-Based Email Response (QwikMail)

## Frontend Development (React.js & Tailwind CSS)

To create UserInterface,we use react.js for QwikMail Application
The command to design react application is "npx create-react-app email-response"
Now we get the structure of basic packages that are associated with react
To make our page more attractive we use tailwind.css for styling
To import Tailwind into our application ,we use "npm install -D tailwindcss" command
Configure the tailwind.config.js File
we provided a basic routing for our application in MainApp.js component
Created a Header with an Application logo
Created client ID to get access to the mail account using Gmail Authentication Oauth2.0
Command to install gmail api access-->"npm install @react-oauth/google@latest"
Import the libraries that are related to google apis
Created a sign in button through google
Import axios to get permission to the useraccess token
To import the above we use "npm install axios@0.21.1"
we use state variables to store user information
implemented Signin and Signout functions
Used reactContext for storing data(user data) at global level