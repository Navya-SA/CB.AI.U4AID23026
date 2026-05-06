const Log = require("../logging_middleware/logger");
require("dotenv").config();

const express = require("express");
const axios = require("axios");
const optimizeSchedule = require("./scheduler");

const app = express();

app.use(express.json());

const token = process.env.TOKEN;

app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

app.get("/schedule/:hours", async (req, res) => {
  try {
    const maxHours = parseInt(req.params.hours);

    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/vehicles",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const vehicles = response.data.vehicles;

    const result = optimizeSchedule(vehicles, maxHours);

    await Log(
      "backend",
      "info",
      "route",
      `Schedule generated for ${maxHours} mechanic hours`
    );

    res.json(result);

  } catch (error) {

    await Log(
      "backend",
      "error",
      "route",
      "Error while generating schedule"
    );

    res.status(500).json({
      error: error.response?.data || error.message,
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});