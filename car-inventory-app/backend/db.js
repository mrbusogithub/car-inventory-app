const mongoose = require("mongoose"); // Importing Mongoose for MongoDB database connection

// MongoDB connection URI with necessary credentials and options
const connectionUri =
  "mongodb+srv://HyperionDev_Student1:Z5m3kLJrQL5AP0vd@cluster0.lxmougj.mongodb.net/?retryWrites=true&w=majority";

// To establish connection to MongoDB using Mongoose
mongoose.connect(connectionUri, {
  useNewUrlParser: true, // To use new URL parser
  useUnifiedTopology: true, // To use new Server Discover and Monitoring engine
});

// Exporting the Mongoose object for use in other parts of the application
module.exports = mongoose;
