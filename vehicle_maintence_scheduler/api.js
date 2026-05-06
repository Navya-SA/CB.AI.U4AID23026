require("dotenv").config();

const axios = require("axios");

console.log("TOKEN:");
console.log(process.env.TOKEN);

async function testAPI() {
  try {
    console.log("Request started...");

    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/vehicles",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
        timeout: 10000,
      }
    );

    console.log("SUCCESS:");
    console.log(response.data);

  } catch (error) {
    console.log("FULL ERROR:");
    console.log(error.response?.data || error.message);
  }
}

testAPI();