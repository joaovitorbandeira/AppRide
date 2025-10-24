const params = new URLSearchParams(window.location.search);
const rideID = params.get("id");
const ride = getRideRecord(rideID);

document.addEventListener("DOMContentLoaded", async () => {
  const firstPosition = ride.data[0];
  const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude);

  const mapElement = document.createElement("div");
  mapElement.style = "width:100px;height:100px";
  mapElement.className = "bg-secondary rounded-4 p-1";

  const dataElement = document.createElement("div");
  dataElement.className = "flex-fill d-flex flex-column";

  const cityDiv = document.createElement("div");
  cityDiv.innerText = `${firstLocationData.city} - ${firstLocationData.countryCode}`;
  cityDiv.className = "mb-2 text-primary fw-bold";

  const maxSpeedDiv = document.createElement("div");
  maxSpeedDiv.innerText = `Max Speed: ${getMaxSpeed(ride.data)} Km/h`;
  maxSpeedDiv.className = "h5";

  const distanceDiv = document.createElement("div");
  distanceDiv.innerText = `Distance: ${getDistance(ride.data)} in Km`;

  const durationDiv = document.createElement("div");
  durationDiv.innerText = `Duration: ${getDuration(ride)}`;

  const dateDiv = document.createElement("div");
  dateDiv.innerText = getStartDate(ride);
  dateDiv.className = "text-secondary mt-2";

  dataElement.appendChild(cityDiv);
  dataElement.appendChild(maxSpeedDiv);
  dataElement.appendChild(distanceDiv);
  dataElement.appendChild(durationDiv);
  dataElement.appendChild(dateDiv);

  document.querySelector("#data").appendChild(dataElement);

  const deleteButton = document.querySelector("#deleteBtn");
  deleteButton.addEventListener("click", () => {
    deleteRide(rideID);
    window.location.href = "./";
  });

  const map = L.map("mapDetail");
  map.setView([firstPosition.latitude, firstPosition.longitude], 14);
  L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    minZoom: 5,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  }).addTo(map);

  const positionsArray = ride.data.map((position) => {
    return [position.latitude, position.longitude];
  });

  const polyline = L.polyline(positionsArray, {color: "red", weight: 5}).addTo(map);

  map.fitBounds(polyline.getBounds());
});
