# Next.js Google Authentication Project

## Overview

This project is a Next.js application that implements Google Authentication using NextAuth.js. It allows users to sign in with their Google accounts and displays their profile information upon successful authentication.

## Features

- Google Authentication
- Protected routes
- User profile display
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- A Google Cloud Platform account with OAuth 2.0 credentials

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```
   Replace the placeholder values with your actual Google OAuth credentials and a secure random string for NEXTAUTH_SECRET.

## Running the Application

To run the application in development mode:

npm run dev
or
yarn dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/`: Contains the main pages of the application
- `components/`: Reusable React components
- `styles/`: CSS modules and global styles
- `lib/`: Utility functions and configurations

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/your-username/your-repo-name/issues) if you want to contribute.

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.