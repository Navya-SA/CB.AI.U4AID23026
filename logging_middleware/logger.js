const axios = require("axios");
require("dotenv").config();

const token = process.env.TOKEN;

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("LOG CREATED:", response.data);

  } catch (error) {
    console.log(
      "LOG ERROR:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;