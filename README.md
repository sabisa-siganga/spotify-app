# Spotify App with Next.js

## Overview

This dynamic website is created using data retrieved from the Spotify API. To fetch tracks from the Spotify API, you need a token for authorization purposes.

### Authorization Token

1. **Login or Sign Up on Spotify:** If you already have an account, log in. If not, sign up for a Spotify account.

2. **Create an Account on the Spotify Developer Dashboard:**

   - Browse to [https://developer.spotify.com/dashboard/applications](https://developer.spotify.com/dashboard/applications).
   - Log in with your Spotify account.
   - Click on ‘Create an app’.
   - Pick an ‘App name’ and ‘App description’ of your choice and mark the checkboxes.
   - After creation, you will see your ‘Client Id’, and click on ‘Show client secret’ to unhide your ‘Client secret’.

3. **Generate Authorization Token:**

   - Use Postman or any similar tool to make a request using the obtained Client ID and Secret to generate the token.
   - The token expires in an hour, so you need to make a request to generate a new token every hour.

4. **Use Token in the Application:**
   - After getting the token, copy it from Postman or the tool you used to make the request.
   - Paste the token in the `token` variable in the `token.ts` file located in the `app` folder of my application.

## Getting Started

1. **Clone the Project:**

   ```bash
   git clone https://github.com/sabisa-siganga/spotify-app

   ```

2. **Change Directory:**
   cd spotify-app

3. **Run the App:**
   npm run dev

The app will start on http://localhost:3000. Open your browser and navigate to this address to view the Spotify App.

Make sure to handle token generation in the application code.
