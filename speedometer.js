const speed = document.getElementById("speed");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const watchID = null;

startBtn.addEventListener("click", () => {
  if (watchID) return;

  function handleSucess(pos) {
    speed.innerText = pos.coords.speed
      ? (pos.coords.speed * 3.6).toFixed(1)
      : 0;
  }

  function handleError(error) {
    console.log(error.msg);
  }

  const option = { enableHighAccuracy: true };
  watchID = navigator.geolocation.watchPosition(
    handleSucess,
    handleError,
    option
  );

  startBtn.classList.add("d-none");
  stopBtn.classList.remove("d-none");
});

stopBtn.addEventListener("click", () => {
  if (!watchID) return;

  startBtn.classList.remove("d-none");
  stopBtn.classList.add("d-none");

  navigator.geolocation.clearWatch(watchID);
  watchID = null;
});
