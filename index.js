const express = require("express");
const app = express();

let location = {
  Latitude: "0",
  Longitude: "0",
  time: "0",
};

app.use(express.json());

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api/location", (req, res) => {
  const data = req.body;
  const date = new Date();
  const dateStr = `${date.getHours()} Hrs : ${date.getMinutes()} Min : ${date.getSeconds()} Sec : ${date.getMilliseconds()} ms`;

  location.Latitude = data.Latitude;
  location.Longitude = data.Longitude;
  location.time = dateStr;

  console.log(
    `Latitude : ${location.Latitude}, Longitude : ${location.Longitude}`
  );

  res.json({
    msg: location.time,
  });
});

app.get("/api/location", (req, res) => {
  res.json({
    Latitude: location.Latitude,
    Longitude: location.Longitude,
    Time: location.time,
  });
});

app.listen(3000, () => {
  console.log("Server Started.");
});
