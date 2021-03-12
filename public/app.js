const api_url = "http://192.168.1.101:3000/api/location";

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const tiles = L.tileLayer(tileUrl, { attribution });
const issMap = L.map("phoneMap").setView([0, 0], 2);
tiles.addTo(issMap);
const marker = L.marker([0, 0]).addTo(issMap);

const latitudeDom = document.getElementById("latitude");
const longitudeDom = document.getElementById("longitude");
const checkBoxDom = document.getElementById("checkBox");
const timeDom = document.getElementById("time");

async function getPhone() {
  const res = await fetch(api_url);
  const data = await res.json();

  console.log(data);

  const { Latitude, Longitude, Time } = data;

  if (checkBoxDom.checked === true) issMap.setView([Latitude, Longitude]);

  marker.setLatLng([Latitude, Longitude]);

  latitudeDom.textContent = Latitude;
  longitudeDom.textContent = Longitude;
  timeDom.textContent = Time;
}

setInterval(getPhone, 1000);
