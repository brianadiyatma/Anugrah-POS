const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routers/auth");
const inventoryRoute = require("./routers/inventory");
const path = require("path");

require("dotenv").config();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  req.user = {};
  req.user._id = "6276118a2f739926365660a0";
  req.user.privilege = "superadmin";
  next();
});

app.use("/api/auth", authRoute);
app.use("/api/inventory", inventoryRoute);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err.message);
  });
