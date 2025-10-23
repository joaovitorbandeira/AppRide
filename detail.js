const params = new URLSearchParams(window.location.search);
const rideID = params.get("id");
const ride = getRideRecord(rideID);
console.log(ride);

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
});
