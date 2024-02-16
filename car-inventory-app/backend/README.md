# Car Inventory Management System

This is a basic CRUD (Create, Read, Update, Delete) application for managing a car inventory. It provides RESTful API endpoints to perform operations on car data.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

# Car Inventory Management System

This is a basic CRUD (Create, Read, Update, Delete) application for managing a car inventory. It provides RESTful API endpoints to perform operations on car data.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Installation and Running the Application

1. **Navigate to the project directory:**

   ```bash
   cd carInventory
   ```

2. **Install dependencies using npm:**

   ```bash
   npm install
   ```

3. **Set up your MongoDB connection:**

   - Update the `connectionUri` in `db.js` with your MongoDB connection string.

4. **Running the Application:**

   - Start the MongoDB server:

     ```bash
     # Example command for a local MongoDB server
     mongod
     ```

   - Run the application:

     ```bash
     npm start
     ```

     The server will start on http://localhost:3000

     The server will also connect to your MongoDB database.

     ## Postman Setup

     1. [Download and install Postman](https://www.postman.com/downloads/), if you haven't already.
     2. In Postman, create a new blank workspace.
     3. In the workspace, create a new HTTP collection to organize your requests.

   ## API Endpoints

   - **GET /cars:** Get a list of all cars.

- **POST /cars:** Add a new car to the inventory.
- **GET /cars/:id:** Get details of a specific car by ID.
- **PUT /cars/:id:** Update details of a specific car by ID.
- **DELETE /cars/:id:** Delete a car from the inventory by ID.
- **GET /cars/older-than-5-years:** Get a list of cars older than 5 years.

## Notes

- Ensure the MongoDB URI in server.js is properly configured.
- Ensure that you have Postman's Desktop Agent installed and enabled so that you can make requests to a local server.
