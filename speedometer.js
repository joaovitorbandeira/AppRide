const speed = document.getElementById("speed");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let watchID = null;
let currentRide = null;

startBtn.addEventListener("click", () => {
  if (watchID) return;

  function handleSucess(pos) {
    addPosition(currentRide, pos);
    speed.innerText = pos.coords.speed ? (pos.coords.speed * 3.6).toFixed(1) : 0;
  }

  function handleError(error) {
    console.log(error.msg);
  }

  const option = {enableHighAccuracy: true};
  currentRide = createNewRide();
  watchID = navigator.geolocation.watchPosition(handleSucess, handleError, option);

  startBtn.classList.add("d-none");
  stopBtn.classList.remove("d-none");
});

stopBtn.addEventListener("click", () => {
  if (!watchID) return;

  navigator.geolocation.clearWatch(watchID);
  watchID = null;

  updateStopTime(currentRide);
  currentRide = null;

  startBtn.classList.remove("d-none");
  stopBtn.classList.add("d-none");
});
