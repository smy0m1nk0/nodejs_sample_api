const express = require("express");
const productRoutes = require("./routes/product.route");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello From Node API Server Updated!");
});

mongoose
  .connect(
    "mongodb+srv://social:XGM6nARv7KzBq39F@backenddb.lxnm3qo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
