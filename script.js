let speed = 0;
let fuel = 80;
let temp = 90;
let gear = "P";

const speedValue = document.getElementById("speedValue");
const rpmValue = document.getElementById("rpmValue");
const rpmBar = document.getElementById("rpmBar");
const fuelValue = document.getElementById("fuel");
const fuelBar = document.getElementById("fuelBar");
const tempValue = document.getElementById("temp");
const gearValue = document.getElementById("gear");
const car = document.getElementById("car");
const wheels = document.querySelectorAll(".wheel");

const seatbeltLight = document.getElementById("seatbeltLight");
const engineLight = document.getElementById("engineLight");
const doorLight = document.getElementById("doorLight");

function updateDashboard() {
  speedValue.textContent = speed;
  fuelValue.textContent = fuel;
  tempValue.textContent = temp;
  gearValue.textContent = gear;

  let rpm = Math.floor(speed * 35);
  if (rpm > 8000) rpm = 8000;
  rpmValue.textContent = rpm;
  rpmBar.style.width = (rpm / 8000) * 100 + "%";

  fuelBar.style.width = fuel + "%";

  if (speed <= 0) {
    car.style.animationPlayState = "paused";
    wheels.forEach(w => w.style.animationPlayState = "paused");
  } else {
    car.style.animationPlayState = "running";
    wheels.forEach(w => w.style.animationPlayState = "running");
  }

  let carDuration = 18 - (speed / 10);
  if (carDuration < 2) carDuration = 2;
  car.style.animationDuration = carDuration + "s";

  let wheelDuration = 2 - (speed / 150);
  if (wheelDuration < 0.2) wheelDuration = 0.2;
  wheels.forEach(w => w.style.animationDuration = wheelDuration + "s");

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
}

function startCar() {
  if (speed === 0) {
    speed = 20;
    gear = "D";
    fuel -= 1;
    updateDashboard();
  }
}

function increaseSpeed() {
  if (speed < 220) {
    speed += 10;
    gear = "D";
    fuel -= 1;
    temp += 1;
    updateDashboard();
  }
}

function decreaseSpeed() {
  if (speed > 0) {
    speed -= 10;
    if (speed < 0) speed = 0;
    if (speed === 0) gear = "N";
    updateDashboard();
  }
}

function brakeCar() {
  speed -= 20;
  if (speed < 0) speed = 0;
  if (speed === 0) gear = "N";
  updateDashboard();
}

function stopCar() {
  speed = 0;
  gear = "P";
  updateDashboard();
}

updateDashboard();