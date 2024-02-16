const mongoose = require("../db"); // Importing the Mongoose object to create the Car model using the defined schema

// To define the schema for the Car model
const carSchema = new mongoose.Schema({
  // Model year of the car (optional)
  model: {
    type: Number,
    required: false,
  },
  // Make of the car (required)
  make: {
    type: String,
    required: true,
  },
  // Registration number of the car (optional)
  registration_number: {
    type: String,
    required: false,
  },
  // Owner of the car (required)
  owner: {
    type: String,
    required: true,
  },
  // Address of the car (optional)
  address: {
    type: String,
    required: false,
  },
});

// To create the Car model using the defined schema
const Car = mongoose.model("Car", carSchema);

// Exporting the Car model for use in other parts of the application
module.exports = Car;
