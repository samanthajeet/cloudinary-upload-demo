This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## .gitignore
### BEFORE YOU DO ANYTHING ELSE BEYOND THIS POINT
1. Go into the .gitignore file and add .env on a new line in the file, then save.

    <img src='assets/s3-01.jpg' />

    - We will be putting your Cloudinary API keys in a .env file. If you don't add your .env to your .gitignore and you push to github, evil people will use your keys for their evil purposes at your expense.
1. Double check and if necessary review step 1.
1. Triple check and if necessary review step 1.
#### **Failing to do this step could easily cost you $5,000/day.**

### Create a .env File
Create the file at the root of your project and add the following properties:
```
REACT_APP_COUDINARY_UPLOAD_PRESET=
REACT_APP_CLOUDINARY_API_KEY=
REACT_APP_CLOUDINARY_CLOUD_NAME=
```

## Account Setup
If you haven't already signed up for Cloudinary account, you can do so [here](https://cloudinary.com/). Cloudify offers a free tier, but make sure to read it's limitations [here](https://cloudinary.com/pricing)

Onced logged-in, you should land on your dashboard. At the top of your dashboard are Account Details where you'll fine youre CLOUND NAME and API KEY. Copy and insert these into your .env

<img src='C:\Users\Sam\Documents\01-Dev\React\Tutorial\cloudinary-upload-demo\cloudinary-upload-demo\src\images\account_details.png' />
