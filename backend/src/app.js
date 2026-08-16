const express = require("express");
const cors = require("cors");

const wasteRoutes = require("./routes/wasteRoutes");
const collectionRoutes = require("./routes/collectionRoutes");
const predictionRoutes = require("./routes/predictionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Swacch Intelligence Backend is running",
  });
});

app.use("/api/waste", wasteRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/predictions", predictionRoutes);

module.exports = app;