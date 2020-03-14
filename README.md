The code is based on Steven Grider course in Udemy with some changes and code styling improvements. Unfortunately, as it uses Google+ API it causes problems lately because of some dependencies that are not installed/updated.

The application is deployed on a Heroku server: https://mysterious-hollows-65412.herokuapp.com where you can try out its full functionality.

# How to use the downloaded files

1) Run "npm install" in the extracted folder to install all dependenices
2) Run "npm run dev" to view the project in the browser 
NB: I am using the "concurrently" library so that Express server and React dev server communicate properly

# How does it work

This is a web application with NodeJS for backend (incl. ExpressJS, Passport, OAuth, MongoDB and Mongoose) and React+Redux for frontend that provides the users with the opportunity to create online surveys and send them via email.

1.Click Login with Google to be able to get access to the dashboard. I am using PassportJS and OAuth flow for authentication. After successfull authentication with your Google account the app recieves a callback from Google and your id is saved in MongodDB (I am using mLab for that part and 2 databases - for development and for production).

2.After logging in you can add credits to make surveys by clicking on the green button. I am using the free Stripe API for this part. It is in test mode and you can provide fake credit card number (try typing only 42 several times for example) and some random non-existing email. 5 credits will be added automatically in your account.

3.Now you can add a new survey using the red button in the bottom right corner. Fill in the form and provide a real email if you want to receive it. You are redirected to a page where you can review your inputs. Here I am using the advantages of Redux and Redux-form. 

4.After confirming the provided email template is sent via Sendgrid mailer. The webhook registering if the user has clicked on the 'Yes' or 'No' link in the email works only on the Heroku domain (with some troubles lately).

5.A list with your surveys appears on the page if you are logged in (I am using Mongoose queries for this part).

Screenshots
![1](https://user-images.githubusercontent.com/13184341/76682017-0e59fb80-6601-11ea-96d3-04d04e789631.PNG)
![2](https://user-images.githubusercontent.com/13184341/76682021-10bc5580-6601-11ea-9096-ed889a381ce6.PNG)
![3](https://user-images.githubusercontent.com/13184341/76682022-11ed8280-6601-11ea-96e4-a7eace000490.PNG)
