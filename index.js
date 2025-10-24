const rideListElement = document.querySelector("#rideList");
const allRides = getAllRides();

allRides.forEach(async ([id, value]) => {
  const ride = JSON.parse(value);
  ride.id = id;
  const itemElement = document.createElement("li");
  itemElement.id = ride.id;
  itemElement.className = "d-flex p-2 align-items-center justify-content-between gap-2 shadow-sm";
  rideListElement.appendChild(itemElement);

  itemElement.addEventListener("click", () => {
    window.location.href = `./detail.html?id=${ride.id}`;
  });

  const firstPosition = ride.data[0];
  const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude);

  const mapID = `map${ride.id}`;
  const mapElement = document.createElement("div");
  mapElement.id = mapID;
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

  itemElement.appendChild(mapElement);
  itemElement.appendChild(dataElement);

  const map = L.map(mapID, {
    zoomControl: false,
    attributionControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    dragging: false,
  });

  map.setView([firstPosition.latitude, firstPosition.longitude], 14);
  L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    minZoom: 5,
    attribution: false,
  }).addTo(map);
});
