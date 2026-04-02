let speed = 0;
let fuel = 80;
let temp = 90;
let range = 420;
let gear = "P";

const speedValue = document.getElementById("speedValue");
const gearValue = document.getElementById("gearValue");
const needle = document.getElementById("needle");

const rpmValue = document.getElementById("rpmValue");
const rpmBar = document.getElementById("rpmBar");

const fuelValue = document.getElementById("fuelValue");
const fuelBar = document.getElementById("fuelBar");

const tempValue = document.getElementById("tempValue");
const rangeValue = document.getElementById("rangeValue");

const seatbeltLight = document.getElementById("seatbeltLight");
const engineLight = document.getElementById("engineLight");
const absLight = document.getElementById("absLight");
const doorLight = document.getElementById("doorLight");

function updateMeter() {
  speedValue.textContent = speed;
  gearValue.textContent = gear;
  fuelValue.textContent = fuel;
  tempValue.textContent = temp;
  rangeValue.textContent = range;

  const rpm = Math.min(8.0, (0.8 + speed * 0.03));
  rpmValue.textContent = rpm.toFixed(1);
  rpmBar.style.width = (rpm / 8) * 100 + "%";

  fuelBar.style.width = fuel + "%";

  const angle = -90 + (speed / 220) * 180;
  needle.style.transform = `rotate(${angle}deg)`;

  if (speed === 0) {
    seatbeltLight.classList.add("active");
    doorLight.classList.add("active");
  } else {
    seatbeltLight.classList.remove("active");
    doorLight.classList.remove("active");
  }

  if (temp > 110) {
    engineLight.classList.add("active");
  } else {
    engineLight.classList.remove("active");
  }

  if (speed > 140) {
    absLight.classList.add("active");
  } else {
    absLight.classList.remove("active");
  }
}

function startCar() {
  if (speed === 0) {
    speed = 20;
    gear = "D";
    fuel = Math.max(0, fuel - 1);
    range = Math.max(0, range - 5);
    updateMeter();
  }
}

function increaseSpeed() {
  if (speed < 220) {
    speed += 10;
    gear = "D";
    fuel = Math.max(0, fuel - 1);
    temp += 1;
    range = Math.max(0, range - 6);
    updateMeter();
  }
}

function decreaseSpeed() {
  if (speed > 0) {
    speed -= 10;
    if (speed < 0) speed = 0;
    if (speed === 0) gear = "N";
    updateMeter();
  }
}

function brakeCar() {
  speed -= 20;
  if (speed < 0) speed = 0;
  if (speed === 0) gear = "N";
  updateMeter();
}

function stopCar() {
  speed = 0;
  gear = "P";
  updateMeter();
}

updateMeter();