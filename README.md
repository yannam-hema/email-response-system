# Context Based Email Response -(QWIKMAIL)

1.To create UserInterface,we use react.js for QwikMail Application
2.The command to design react application is "npx create-react-app email-response"
3.Now we get the structure of basic packages that are associated with react
4.To make our page more attractive we use tailwind.css for styling
5.To import Tailwind into our application ,we use "npm install -D tailwindcss" command
6.Configure the tailwind.config.js File
7.we provided a basic routing for our application in MainApp.js component
8.Created a Header with an Application logo
9.Created client ID to get access to the mail account using Gmail Authentication Oauth2.0
10.Command to install gmail api access-->"npm install @react-oauth/google@latest"
11.Import the libraries that are related to google apis
12.Created a sign in button through google
13.Import axios to get permission to the useraccess token
14.To import the above we use "npm install axios@0.21.1"
15.we use state variables to store user information
16.implemented Signin and Signout functions
17.Used reactContext for storing data(user data) at global level
