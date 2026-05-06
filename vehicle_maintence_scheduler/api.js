const optimizeSchedule = require("./scheduler");
const axios = require("axios");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjYi5haS51NGFpZDIzMDI2QGNiLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNTgzNjUsImlhdCI6MTc3ODA1NzQ2NSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6Ijg5MjQ3NWQ4LWViOTYtNDBkOS05MWVkLTg3NzVkZjRlYzIwYyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5hdnlhIHNhIiwic3ViIjoiMjc0ZGI1ZTEtOGJmNy00ZGVhLWJjM2YtNmM4OGNmODUzYTM3In0sImVtYWlsIjoiY2IuYWkudTRhaWQyMzAyNkBjYi5zdHVkZW50cy5hbXJpdGEuZWR1IiwibmFtZSI6Im5hdnlhIHNhIiwicm9sbE5vIjoiY2IuYWkudTRhaWQyMzAyNiIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6IjI3NGRiNWUxLThiZjctNGRlYS1iYzNmLTZjODhjZjg1M2EzNyIsImNsaWVudFNlY3JldCI6Ik1ydlZwZlhBWU13eGtQWXAifQ.DRR06vpCDrDu85vYd5LvEIjiNJgR5KlK3Q_xJspPq98";

async function getDepots() {
  console.log("Request started...");

  try {
    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/depots",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 15000,
      }
    );

    console.log("SUCCESS:");
    console.log(response.data);

  } catch (error) {
    console.log("FULL ERROR:");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}


async function getVehicles() {
  try {
    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/vehicles",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("VEHICLES DATA:");
    console.log(response.data);
    const vehicles = response.data.vehicles;

    const result = optimizeSchedule(vehicles, 60);

    console.log("OPTIMIZED RESULT:");
    console.log(result);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}
getDepots();
getVehicles();
