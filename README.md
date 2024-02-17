# Car Inventory App

Welcome to the Car Inventory App! This is a full-stack web application built with Express for the backend and React for the frontend. The application allows you to manage information about cars stored in a MongoDB database.

## Features

- Add a car to the cars collection.
- Update information about a single car.
- Update information about more than one car.
- Delete a specific car.
- List all information for all cars in the database.
- List the model, make, registration number, and current owner for all cars older than 5 years.

## Installation

To run the Car Inventory App locally, follow these steps:

1. Clone this repository to your local machine:
   
   git clone https://github.com/mrbusogithub/car-inventory-app.git

2. Navigate to the project directory:

   cd car-inventory-app

## Usage

To start the application, run the following command in the root directory:
   
   npm start

This command will concurrently start the backend server and the React development server, allowing you to access the application in your browser.

## Backend Setup

The backend of the application is built with Express and Mongoose for interacting with the MongoDB database. It follows the MVC (Model-View-Controller) architecture, with separate directories for models and controllers.

## Frontend Setup

The frontend of the application is built with React, providing a user-friendly interface for interacting with the car inventory. It communicates with the backend API to perform CRUD operations on the car data.

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, please submit a pull request or open an issue on GitHub.
