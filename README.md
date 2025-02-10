# Shelfmate

Shelfmate is a Product Recommendation platform designed to help users explore alternative products, share their queries, and provide recommendations. It is a user-friendly and fully responsive platform that facilitates meaningful interactions about products and their alternatives.

## Live Demo
[Live Website Link](https://shelfmate-81012.web.app/)

---

## Features

### Public Features
- **Home Page**:  
  - Dynamic and responsive design.
  - Beautiful slider showcasing the purpose of the platform.
  - Recent Queries section featuring the latest six user queries.
  - Additional creative sections with animations.

- **Queries Page**:  
  - View all user queries in descending order.
  - Search functionality to find queries based on product name.
  - Toggle grid layout (1/2/3 columns) for better viewing options.

- **404 Error Page**:  
  - Customized error page with a button to redirect users to the homepage.

### Private Features (Logged-in Users)
- **User Authentication**:  
  - Email/Password login and Google Sign-in.
  - Secure token-based authentication (JWT).

- **Add Queries**:  
  - Add detailed queries about products.
  - Automatically includes user details and timestamps.

- **My Queries**:  
  - View, update, or delete personal queries.
  - Navigate to add new queries.
  - Stylish banner and card-based layout.

- **Query Details**:  
  - View specific query details along with user information.
  - Add recommendations for products with detailed reasoning.
  - View all recommendations for the query.

- **Recommendations**:  
  - Users can add, view, and delete their recommendations.
  - Dedicated pages for "My Recommendations" and "Recommendations For Me."

---

## Technology Stack

### Frontend
- **React.js**: For dynamic and responsive UI.
- **Tailwind CSS**: For styling and consistent design.
- **React Router**: For seamless navigation.

### Backend
- **Node.js**: Server-side operations.
- **Express.js**: Backend framework.
- **MongoDB**: Database for storing user queries and recommendations.

### Authentication & Security
- **Firebase Authentication**: Secure login and registration.
- **JWT**: Token-based authentication for secure private routes.
- **Environment Variables**: Secure sensitive credentials.


## 💻 Local Setup Guide

Follow these steps to run the project locally:

### 1. Clone the repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/ayeshaferdous/shelfMate.git
cd shelfMate
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set up environment variables

To configure the backend services like Firebase and MongoDB, you'll need to set up environment variables. Create a .env file in the root of the project and add the following:

```bash
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
```

Make sure to replace your-* with actual credentials from your Firebase project.

### 4. Run the project

Once the dependencies are installed and environment variables are configured, you can run the project locally using:

```bash
npm start
```

This will start the development server and open the project in your default browser. You can now begin working with the shelfmate Platform locally.

## 🔧 Backend Setup (Optional)

If you want to set up the backend locally for testing purposes:

1. Navigate to the server directory (if applicable).
2. Install backend dependencies:

```bash
npm install
```

3. Create a .env file in the backend directory with the following credentials:

```bash
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-jwt-secret
```

4. Start the backend server:

```bash
npm run dev
```

Your backend will now be running, and you can test the API along with the frontend.

---

That's it! You're all set up to explore and contribute to the *ShelfMate Platform*. Enjoy your journey! 🚀
```

This is a full setup guide that includes the necessary dependencies, local environment setup, and backend instructions for the *ShelfMate Platform* project. You can copy this into your README.md file for better clarity.
