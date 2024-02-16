import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect from the 'react' library
import axios from "axios"; // Importing axios for making HTTP requests
import { Button } from "react-bootstrap"; // Importing the 'Button' component from the 'react-bootstrap' library

const UpdateMultipleCars = () => {
  const [cars, setCars] = useState([]); // State to store the list of all cars
  const [selectedCarIds, setSelectedCarIds] = useState([]); // State to store the IDs of the selected cars for updating
  const [carUpdates, setCarUpdates] = useState({}); // State to store updates for each selected car

  // Fetch all cars when the component mounts
  useEffect(() => {
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

  // Function to handle the selection of cars for updating
  const handleCarSelect = (carId) => {
    // Toggle the selected state for the car
    setSelectedCarIds((prevSelectedCarIds) => {
      if (prevSelectedCarIds.includes(carId)) {
        // Car is already selected, remove it
        return prevSelectedCarIds.filter((id) => id !== carId);
      } else {
        // Car is not selected, add it
        return [...prevSelectedCarIds, carId];
      }
    });
  };

  // Function to handle input changes for the selected cars
  const handleInputChange = (carId, e) => {
    const { name, value } = e.target;
    // Update the carUpdates state with the new data for the specific car ID
    setCarUpdates((prevCarUpdates) => ({
      ...prevCarUpdates,
      [carId]: {
        ...prevCarUpdates[carId],
        [name]: value,
      },
    }));
  };

  // Function to update the selected cars
  const updateCars = async () => {
    try {
      // Loop through selected car IDs and update each one
      for (const carId of selectedCarIds) {
        const response = await axios.put(
          `http://localhost:5000/cars/${carId}`,
          carUpdates[carId]
        );
        console.log(`Car ${carId} updated:`, response.data);
      }

      // Reset the state after updating cars
      setSelectedCarIds([]);
      setCarUpdates({});
    } catch (error) {
      console.error("Error updating cars:", error);
    }
  };

  // JSX rendering of the component
  return (
    <div className="mt-4">
      <h2>Update Multiple Car Information</h2>
      {/* To display the list of cars for selection */}
      <div>
        <div style={{ fontSize: "18px" }}>
          <label>Select cars to update:</label>
        </div>

        <select
          style={{ width: "250px" }}
          multiple
          onChange={(e) =>
            setSelectedCarIds(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {cars.map((car) => (
            <option key={car._id} value={car._id}>
              {car.make} - {car.model}
            </option>
          ))}
        </select>
      </div>

      {/* Display the form for updating selected cars */}
      {selectedCarIds.length > 0 && (
        <form>
          {selectedCarIds.map((carId) => (
            <div key={carId}>
              <div style={{ marginRight: "12.5rem" }}>
                <label>Model:</label>
              </div>
              <input
                type="number"
                name="model"
                value={carUpdates[carId]?.make || ""}
                onChange={(e) => handleInputChange(carId, e)}
                placeholder="e.g 2023"
                style={{ width: "250px" }}
              />
              <br />
              <div>
                <label>Make (car brand and model name):</label>
              </div>
              <input
                type="text"
                name="make"
                value={carUpdates[carId]?.make || ""}
                onChange={(e) => handleInputChange(carId, e)}
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
                value={carUpdates[carId]?.registration_number || ""}
                onChange={(e) => handleInputChange(carId, e)}
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
                value={carUpdates[carId]?.owner || ""}
                onChange={(e) => handleInputChange(carId, e)}
                placeholder="Enter name and surname here"
                style={{ width: "250px" }}
              />
              <br />
              <div style={{ marginRight: "11.8rem" }}>
                <label>Address:</label>
              </div>
              <input
                type="text"
                name="address"
                value={carUpdates[carId]?.address || ""}
                onChange={(e) => handleInputChange(carId, e)}
                placeholder="Enter address here"
                style={{ width: "250px" }}
              />
              <br />
            </div>
          ))}
        </form>
      )}

      {/* Button to trigger the update for selected cars */}
      <div className="mt-3">
        <Button onClick={updateCars}>Update Selected Cars</Button>
      </div>
    </div>
  );
};

// Exporting the UpdateMultipleCars component for use in other parts of the application
export default UpdateMultipleCars;
