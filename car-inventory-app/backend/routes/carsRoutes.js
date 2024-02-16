// Importing the Express framework and carsController for defining car-related routes
const express = require("express");
const carsController = require("../controllers/carsController");

// To create a new Express router
const router = express.Router();

// To define routes and associate them with corresponding controller methods

// Route to get all cars
router.get("/", carsController.getAllCars);

// Route to add a new car
router.post("/", carsController.addCar);

// Route to get cars older than 5 years
router.get("/older-than-5-years", carsController.getCarsOlderThan5Years);

// Route to get a car by its ID
router.get("/:id", carsController.getCarById);

// Route to update a car by its ID
router.put("/:id", carsController.updateCar);

// Route to delete a car by its ID
router.delete("/:id", carsController.deleteCar);

// Exporting the router for use in other parts of the application
module.exports = router;
