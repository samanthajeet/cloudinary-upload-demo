This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

Before starting, `npm i` the following dependencies
- axios
- react-dropzone

## .gitignore
### BEFORE YOU DO ANYTHING ELSE BEYOND THIS POINT
1. Go into the .gitignore file and add .env on a new line in the file, then save.
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

All variables MUST start with REACT_APP_ 

## Account Setup
If you haven't already signed up for Cloudinary account, you can do so [here](https://cloudinary.com/). Cloudify offers a free tier, but make sure to read it's limitations [here](https://cloudinary.com/pricing)

Onced logged-in, you should land on your dashboard. At the top of your dashboard are Account Details where you'll fine youre CLOUND NAME and API KEY. Copy and insert these into your .env

<img src='account_details.png' />

## Preset Setput

1. From your Dashboard go-to Settings, which can be accessed using the gear icon in the upper right corner
2. Click on the Upload tab
3. Scroll down to Upload Presets
4. Click Add upload Preset if you don't already have one
5. set Signging Mode to UNSIGNED
6. Click Save
7. Copy the name of the preset into your .env


## Demo Should Now Work
1. Open a terminal and run `npm start`
 - you should be able to able to upload a single image or multiple images