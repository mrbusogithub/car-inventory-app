const express = require("express"); // Importing the Express library
const bodyParser = require("body-parser"); // Importing the bodyParser middleware for parsing incoming JSON data
const cors = require("cors"); // Importing the CORS middleware for enabling Cross-Origin Resource Sharing
const carsRoutes = require("./routes/carsRoutes"); // Importing the carsRoutes module for defining car-related routes

const app = express();
const port = 5000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Routes
app.use("/cars", carsRoutes);

// To start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
