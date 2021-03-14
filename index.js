const express = require("express");
const app = express();
const locationRoute = require("./routes/location");

app.use("/", express.static("public"));

//Get Location Data from mobile App and Send Location Data to front-end
app.use("/api/location", express.json({ limit: "1mb" }));
app.use("/api/location", locationRoute);

app.listen(3000, () => {
  console.log("Server Started.");
});
