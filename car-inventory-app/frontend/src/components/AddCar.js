import React, { useState } from "react"; // Importing React and useState from the 'react' library
import axios from "axios"; // Importing axios for making HTTP requests
import { Button } from "react-bootstrap"; // Importing the 'Button' component from the 'react-bootstrap' library

const AddCar = () => {
  // State to manage the form data
  const [carData, setCarData] = useState({
    model: "",
    make: "",
    registration_number: "",
    owner: "",
    address: "",
  });

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  // Function to add a new car to the database
  const addCar = async () => {
    try {
      // Send a POST request to add a new car
      const response = await axios.post("http://localhost:5000/cars", carData);
      console.log("New car added:", response.data);

      // Reset the form fields
      setCarData({
        model: "",
        make: "",
        registration_number: "",
        owner: "",
        address: "",
      });
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  // JSX for the component
  return (
    <div className="mt-5">
      <h2>Add Car to the database</h2>
      {/* Adding form elements to collect car information */}
      <form>
        {/* Model Year */}
        <div style={{ marginRight: "10.3rem" }}>
          <label>Model Year:</label>
        </div>

        <input
          type="number"
          name="model"
          value={carData.model}
          onChange={handleInputChange}
          placeholder="e.g 2023"
          style={{ width: "250px" }}
        />
        <br />

        {/* Make (car brand and model name) */}
        <div>
          <label>Make (car brand and model name):</label>
        </div>
        <input
          type="text"
          name="make"
          value={carData.make}
          onChange={handleInputChange}
          placeholder="e.g BMW X3"
          style={{ width: "250px" }}
        />
        <br />

        {/* Registration Number */}
        <div style={{ marginRight: "6.3rem" }}>
          <label>Registration Number:</label>
        </div>

        <input
          type="text"
          name="registration_number"
          value={carData.registration_number}
          onChange={handleInputChange}
          placeholder="e.g ABC 123 GP"
          style={{ width: "250px" }}
        />

        <br />

        {/* Owner (Name and Surname) */}
        <div style={{ marginRight: "2.9rem" }}>
          <label>Owner (Name and Surname):</label>
        </div>

        <input
          type="text"
          name="owner"
          value={carData.owner}
          onChange={handleInputChange}
          placeholder="Enter name and surname here"
          style={{ width: "250px" }}
        />

        <br />

        {/* Address */}
        <div style={{ marginRight: "11.8rem" }}>
          <label>Address:</label>
        </div>

        <input
          type="text"
          name="address"
          value={carData.address}
          onChange={handleInputChange}
          placeholder="Enter address here"
          style={{ width: "250px" }}
        />
        <br />

        {/* Button to add a car */}
        <div className="mt-3">
          <Button type="button" onClick={addCar}>
            Add Car
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
