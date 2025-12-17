const express = require("express");
const cors = require("cors");
const { connect } = require("./db-connect/db");
const userRoutes = require("./routes/basic-routes");
let port = 21000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Routes
app.use("/api/v1/user", userRoutes);
app.get("/", (req, res) => {
  return {
    success: true,
    message: "Port is running",
  };
});
app.listen(port, async () => {
  console.log(`App is running on the port ${port}`);
  await connect();
});