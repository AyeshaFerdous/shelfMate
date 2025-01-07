# Shelfmate

Shelfmate is a Product Recommendation platform designed to help users explore alternative products, share their queries, and provide recommendations. It is a user-friendly and fully responsive platform that facilitates meaningful interactions about products and their alternatives.

## Live Demo
[Live Website Link](https://your-live-link.com)

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
