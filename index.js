const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const productRouter = require('./routers/productRouter')

//middleWare
app.use(express.json());
app.use(cors());

// Database Connect

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Database Connect Successfully" .bgYellow.bold);
});


// Main Route
app.use('/api/v1/product', productRouter)


// Primary Route
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome Node MVC Pattern",
  });
});

// Server Connect
app.listen(port, () => {
  console.log(`Server is Running on ${port}`.bgRed.bold);
});
