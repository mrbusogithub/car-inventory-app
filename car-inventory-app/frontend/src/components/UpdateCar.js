import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect from the 'react' library
import axios from "axios"; // Importing axios for making HTTP requests
import { Button } from "react-bootstrap"; // Importing the 'Button' component from the 'react-bootstrap' library

const UpdateCar = () => {
  const [cars, setCars] = useState([]); // State to store the list of all cars
  const [selectedCarId, setSelectedCarId] = useState(""); // State to store the ID of the selected car

  // State to store the details of the selected car for updating
  const [car, setCar] = useState({
    model: 0,
    make: "",
    registration_number: "",
    owner: "",
    address: "",
  });

  // Fetch the list of all cars when the component mounts
  useEffect(() => {
    // Fetch the list of all cars when the component mounts
    const fetchAllCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchAllCars();
  }, []);

  // Function to handle the selection of a car for updating
  const handleCarSelect = (carId) => {
    // Set the selected car ID
    setSelectedCarId(carId);

    // Fetch the selected car's data
    const selectedCar = cars.find((car) => car._id === carId);
    if (selectedCar) {
      setCar(selectedCar);
    }
  };

  // Function to handle input changes in the update form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  // Function to update the selected car's information
  const updateCar = async () => {
    try {
      // Send a PUT request to update the car information
      const response = await axios.put(
        `http://localhost:5000/cars/${selectedCarId}`,
        car
      );
      console.log(response.data); // Log the response data (handle it according to your requirements)

      // Reset the car state after a successful update
      setCar({
        model: 0,
        make: "",
        registration_number: "",
        owner: "",
        address: "",
      });

      // Reset the selected car ID
      setSelectedCarId("");
    } catch (error) {
      // Log and handle errors that occur during the update
      console.error("Error updating car:", error);
    }
  };

  // JSX rendering of the component
  return (
    <div className="mt-4">
      <h2>Update Car Information</h2>
      {/* Display the list of cars for selection */}
      <div>
        <label>Select a car to update:</label>
        <select onChange={(e) => handleCarSelect(e.target.value)}>
          <option value="">Select a car</option>
          {cars.map((car) => (
            <option key={car._id} value={car._id}>
              {car.make} - {car.model}
            </option>
          ))}
        </select>
      </div>

      {/* Display the selected car's data for update */}
      {selectedCarId && (
        <form>
          <div style={{ marginRight: "12.5rem" }}>
            <label>Model:</label>
          </div>
          <input
            type="number"
            name="model"
            value={car.model}
            onChange={handleInputChange}
            style={{ width: "250px" }}
          />
          <br />
          <div>
            <label>Make (car brand and model name):</label>
          </div>
          <input
            type="text"
            name="make"
            value={car.make}
            onChange={handleInputChange}
            placeholder="e.g BMW X3"
            style={{ width: "250px" }}
          />

          <br />
          <div style={{ marginRight: "6.3rem" }}>
            <label>Registration Number:</label>
          </div>
          <input
            type="text"
            name="registration_number"
            value={car.registration_number}
            onChange={handleInputChange}
            placeholder="e.g ABC 123 GP"
            style={{ width: "250px" }}
          />
          <br />
          <div style={{ marginRight: "2.9rem" }}>
            <label>Owner (Name and Surname):</label>
          </div>
          <input
            type="text"
            name="owner"
            value={car.owner}
            onChange={handleInputChange}
            style={{ width: "250px" }}
          />
          <br />
          <div style={{ marginRight: "11.8rem" }}>
            <label>Address:</label>
          </div>
          <input
            type="text"
            name="address"
            value={car.address}
            onChange={handleInputChange}
            placeholder="Enter address here"
            style={{ width: "250px" }}
          />
          <br />
          <div className="mt-3">
            <Button onClick={updateCar}>Update Car</Button>
          </div>
        </form>
      )}
    </div>
  );
};

// Exporting the UpdateCar component for use in other parts of the application
export default UpdateCar;
