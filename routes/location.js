const router = require("express").Router();

let location = {
  Latitude: "0",
  Longitude: "0",
  Speed: "0",
  time: "Data not available",
};

//Get Location Data from mobile App
router.post("/", (req, res) => {
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

//Send Location Data to front-end
router.get("/", (req, res) => {
  res.json({
    Latitude: location.Latitude,
    Longitude: location.Longitude,
    Speed: location.Speed,
    Time: location.time,
  });
});

module.exports = router;
