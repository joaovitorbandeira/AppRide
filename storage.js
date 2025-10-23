function createNewRide() {
  const rideID = Date.now();
  const rideRecord = {
    data: [],
    startTime: rideID,
    stopTime: null,
  };

  saveRideRecord(rideID, rideRecord);
  return rideID;
}

function getAllRides() {
  return Object.entries(localStorage);
}

function getRideRecord(rideID) {
  return JSON.parse(localStorage.getItem(rideID));
}

function saveRideRecord(rideID, rideRecord) {
  localStorage.setItem(rideID, JSON.stringify(rideRecord));
}

function addPosition(rideID, pos) {
  const rideRecord = getRideRecord(rideID);
  const newData = {
    accuracy: pos.coords.accuracy,
    altitude: pos.coords.altitude,
    altitudeAccuracy: pos.coords.altitudeAccuracy,
    heading: pos.coords.heading,
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
    speed: pos.coords.speed,
    timestamp: pos.timestamp,
  };

  rideRecord.data.push(newData);
  saveRideRecord(rideID, rideRecord);
}

function updateStopTime(rideID) {
  const rideRecord = getRideRecord(rideID);
  rideRecord.stopTime = Date.now();
  saveRideRecord(rideID, rideRecord);
}
