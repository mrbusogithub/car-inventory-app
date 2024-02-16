const Car = require("../models/Car"); // Importing the Car model to interact with the cars collection in the database

const carsController = {
  // To get all cars
  getAllCars: async (req, res) => {
    try {
      // To fetch all cars from the database
      const cars = await Car.find();
      // To respond with the list of cars
      res.json(cars);
    } catch (error) {
      // To handle any errors that occur during the operation
      res.status(500).json({ error: error.message });
    }
  },

  // To add a new car
  addCar: async (req, res) => {
    // To extract car data from the request body
    const carData = req.body;
    try {
      // To create a new car in the database
      const newCar = await Car.create(carData);
      // To respond with the newly created car
      res.json(newCar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // To get a car by its ID
  getCarById: async (req, res) => {
    // To extract car ID from the request parameters
    const { id } = req.params;
    try {
      // To find the car in the database by its ID
      const car = await Car.findById(id);
      // To check if the car exists
      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }
      // To respond with the found car
      res.json(car);
    } catch (error) {
      // To handle any errors that occur during the operation
      res.status(500).json({ error: error.message });
    }
  },

  // To update a car by its ID
  updateCar: async (req, res) => {
    // To extract car ID and updated data from the request parameters and body
    const { id } = req.params;
    const updatedCarData = req.body;
    try {
      // To find and update the car in the database
      const updatedCar = await Car.findByIdAndUpdate(id, updatedCarData, {
        new: true,
      });
      // To respond with the updated car
      res.json(updatedCar);
    } catch (error) {
      // To handle any errors that occur during the operation
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a car by its ID
  deleteCar: async (req, res) => {
    // To extract car ID from the request parameters
    const { id } = req.params;
    try {
      // To find and delete the car in the database
      const deletedCar = await Car.findByIdAndDelete(id);
      // To check if the car exists
      if (!deletedCar) {
        return res.status(404).json({ message: "Car not found" });
      }
      // To respond with a success message
      res.json({ message: "Car deleted successfully" });
    } catch (error) {
      // To handle any errors that occur during the operation
      res.status(500).json({ error: error.message });
    }
  },

  // To get cars older than 5 years
  getCarsOlderThan5Years: async (req, res) => {
    // To calculate the date five years ago
    const fiveYearsAgo = new Date();
    fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
    try {
      // To find cars older than 5 years in the database
      const carsOlderThan5Years = await Car.find({
        model: { $lt: fiveYearsAgo.getFullYear() },
      });
      // To respond with the list of cars
      res.json(carsOlderThan5Years);
    } catch (error) {
      // To handle any errors that occur during the operation
      res.status(500).json({ error: error.message });
    }
  },
};

// Exporting the carsController for use in other parts of the application
module.exports = carsController;
