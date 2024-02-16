import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect from the 'react' library
import axios from "axios"; // Importing axios for making HTTP requests
import "./ListOlderThan5Years.css"; // Importing custom styles for the component
import { Button } from "react-bootstrap"; // Importing the 'Button' component from the 'react-bootstrap' library

const ListOlderThan5Years = () => {
  const [olderCars, setOlderCars] = useState([]); // State to store the list of cars older than 5 years
  const [isLoading, setIsLoading] = useState(false); // State to track the loading state of the component
  const [showTable, setShowTable] = useState(false); // State to track whether to show the table of older cars

  // Function to fetch cars older than 5 years from the server
  const handleFetchOlderCars = async () => {
    try {
      // Set loading state to true before making the request
      setIsLoading(true);
      // Make a GET request to fetch older cars from the server
      const response = await axios.get(
        "http://localhost:5000/cars/older-than-5-years"
      );
      // Update the state with the fetched data
      setOlderCars(response.data);
      setShowTable(true); // Set showTable to true after fetching data
    } catch (error) {
      // Log and handle errors that occur during fetch
      console.error("Error fetching older cars:", error);
    } finally {
      // Set loading state to false regardless of success or failure
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <h2>Cars Older Than 5 Years</h2>
      {/* Message prompting the user to click the button to display older cars */}
      <div className="mt-3" style={{ fontSize: "18px" }}>
        <label>Click here to display cars older than 5 years</label>
      </div>
      {/* Button to trigger fetching older cars */}
      <Button onClick={handleFetchOlderCars} disabled={isLoading}>
        {isLoading ? "Fetching..." : "Fetch Older Cars"}
      </Button>

      {/* Render the table of older cars when showTable is true */}
      {showTable && (
        <div className="center-table">
          <table>
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Registration Number</th>
                <th>Owner</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {olderCars.map((car) => (
                <tr key={car._id}>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td>{car.registration_number}</td>
                  <td>{car.owner}</td>
                  <td>{car.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Display a loading message while fetching data */}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

// Exporting the ListOlderThan5Years component for use in other parts of the application
export default ListOlderThan5Years;
