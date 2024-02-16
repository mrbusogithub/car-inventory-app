import React from "react"; // Importing React for building UI components

// Importing individual components for the Car Inventory App
import AddCar from "./components/AddCar";
import UpdateCar from "./components/UpdateCar";
import UpdateMultipleCars from "./components/UpdateMultipleCars";
import DeleteCar from "./components/DeleteCar";
import ListAllCars from "./components/ListAllCars";
import ListOlderThan5Years from "./components/ListOlderThan5Years";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Importing Bootstrap styles

// Functional component representing the main App
const App = () => {
  return (
    <div className="app">
      {/* Heading for the Car Inventory App */}
      <h1>Car Inventory App</h1>
      {/* Rendering each individual component for different functionalities */}
      <AddCar /> {/* Component for adding a new car to the database */}
      <UpdateCar />{" "}
      {/* Component for updating information about a single car */}
      <UpdateMultipleCars />{" "}
      {/* Component for updating information about multiple cars */}
      <DeleteCar /> {/* Component for deleting a car from the database */}
      <ListAllCars /> {/* Component for listing all cars in the database */}
      <ListOlderThan5Years />{" "}
      {/* Component for listing cars older than 5 years */}
    </div>
  );
};

// Exporting the App component for use in other parts of the application
export default App;
