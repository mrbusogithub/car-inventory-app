import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect from the 'react' library
import axios from "axios"; // Importing axios for making HTTP requests
import { Button } from "react-bootstrap"; // Importing the 'Button' component from the 'react-bootstrap' library

const DeleteCar = () => {
  // State to store the list of cars
  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState(""); // State to store the ID of the selected car for deletion
  const [isLoading, setIsLoading] = useState(true); // State to track the loading state of the component

  useEffect(() => {
    // Fetch all cars when the component mounts
    const fetchAllCars = async () => {
      try {
        // Make a GET request to fetch all cars from the server
        const response = await axios.get("http://localhost:5000/cars");
        setCars(response.data); // Update the cars state with the fetched data
        setIsLoading(false); // Set loading state to false after successful fetch
      } catch (error) {
        console.error("Error fetching cars:", error); // Log and handle errors that occur during fetch
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };

    // Call the fetchAllCars function when the component mounts
    fetchAllCars();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // Function to delete the selected car
  const deleteCar = async () => {
    try {
      // Make a DELETE request to delete the selected car by ID
      await axios.delete(`http://localhost:5000/cars/${selectedCarId}`);
      console.log("Car deleted successfully!"); // Log a success message after successful deletion

      // Remove the deleted car from the cars state
      setCars((prevCars) =>
        prevCars.filter((car) => car._id !== selectedCarId)
      );

      // Clear the selected car after successful deletion
      setSelectedCarId("");
    } catch (error) {
      // Log and handle errors that occur during deletion
      console.error("Error deleting car:", error);
    }
  };

  // If the component is still loading, display a loading message
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // JSX rendering of the component
  return (
    <div className="mt-4">
      <h2>Delete Car Document</h2>
      {/* Dropdown to select a car for deletion */}
      <label style={{ fontSize: "18px" }}>
        Select Car:
        <select
          value={selectedCarId}
          onChange={(e) => setSelectedCarId(e.target.value)}
        >
          <option value="">Select a car</option>
          {cars.map((car) => (
            <option key={car._id} value={car._id}>
              {car.make}
            </option>
          ))}
        </select>
      </label>
      {/* Button to trigger car deletion */}
      <Button onClick={deleteCar}>Delete Car</Button>
    </div>
  );
};

// Exporting the DeleteCar component for use in other parts of the application
export default DeleteCar;
