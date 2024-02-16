import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect from the 'react' library
import axios from "axios"; // Importing axios for making HTTP requests
import { Button } from "react-bootstrap"; // Importing the 'Button' component from the 'react-bootstrap' library

const ListAllCars = () => {
  // State to store the list of cars
  const [cars, setCars] = useState([]);
  const [showList, setShowList] = useState(false); // State to track whether to show the list of cars
  const [isLoading, setIsLoading] = useState(false); // State to track the loading state of the component

  // Function to fetch all cars from the server
  const fetchAllCars = async () => {
    try {
      // Make a GET request to fetch all cars from the server
      const response = await axios.get("http://localhost:5000/cars");
      setCars(response.data); // Update the cars state with the fetched data
      setIsLoading(false); // Set loading state to false after successful fetch
    } catch (error) {
      // Log and handle errors that occur during fetch
      console.error("Error fetching cars:", error);
      setIsLoading(false); // Set loading state to false in case of an error
    }
  };

  useEffect(() => {
    // Effect to fetch all cars when the component mounts and showList is true
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Make a GET request to fetch all cars from the server
        const response = await axios.get("http://localhost:5000/cars");
        setCars(response.data); // Update the cars state with the fetched data
      } catch (error) {
        // Log and handle errors that occur during fetch
        console.error("Error fetching cars:", error);
      } finally {
        // Set loading state to false regardless of success or failure
        setIsLoading(false);
      }
    };

    // Fetch all cars when the component mounts and showList is true
    if (showList) {
      fetchData();
    }
  }, [showList]); // Fetch when showList state changes

  // Function to toggle the showList state when the button is clicked
  const handleListAllCars = () => {
    // Toggle the showList state when the button is clicked
    setShowList(!showList);
  };

  // If the component is still loading, display a loading message
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // JSX rendering of the component
  return (
    <div className="mt-4">
      <h2>List Of All Cars</h2>
      {/* Message prompting the user to click the button to display the list */}
      <div className="mt-3" style={{ fontSize: "18px" }}>
        <label>
          Click here to display the list of all cars in the database
        </label>
      </div>

      {/* Button to toggle the visibility of the list */}
      <Button onClick={handleListAllCars}>
        {showList ? "Hide List" : "List All Cars"}
      </Button>

      {/* Render the list of cars when showList is true */}
      {showList && (
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
              {cars.map((car) => (
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
    </div>
  );
};

// Exporting the ListAllCars component for use in other parts of the application
export default ListAllCars;
