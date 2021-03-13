const express = require("express");
const app = express();

let location = {
  Latitude: "0",
  Longitude: "0",
  Speed: "0",
  time: "Data not available",
};

app.use(express.json());

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api/location", (req, res) => {
  const data = req.body;
  const date = new Date();
  const dateStr = ` ${date.getFullYear()} / ${
    date.getMonth() + 1
  } / ${date.getDate()} | ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

  location.Latitude = data.Latitude;
  location.Longitude = data.Longitude;
  location.Speed = data.Speed;
  location.time = dateStr;

  console.log(
    `Latitude : ${location.Latitude}, Longitude : ${location.Longitude}, Speed : ${location.Speed}`
  );

  res.json({
    msg: location.time,
  });
});

app.get("/api/location", (req, res) => {
  res.json({
    Latitude: location.Latitude,
    Longitude: location.Longitude,
    Speed: location.Speed,
    Time: location.time,
  });
});

app.listen(3000, () => {
  console.log("Server Started.");
});
