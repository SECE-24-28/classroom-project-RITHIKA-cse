const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sri-eshwar-backend-1";

exports.connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully");
    console.log(`Connected to: ${mongoose.connection.name} at ${mongoose.connection.host}:${mongoose.connection.port}`);
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    throw error;
  }
};

//get

//post

//put

//delete