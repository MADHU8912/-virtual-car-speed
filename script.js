let speed = 20;

const car = document.getElementById("car");
const speedValue = document.getElementById("speedValue");
const wheels = document.querySelectorAll(".wheel");

function updateAnimation() {
  speedValue.textContent = speed;

  if (speed <= 0) {
    car.style.animationPlayState = "paused";
    wheels.forEach(w => w.style.animationPlayState = "paused");
    return;
  }

  car.style.animationPlayState = "running";
  wheels.forEach(w => w.style.animationPlayState = "running");

  let carDuration = 16 - (speed / 2);
  if (carDuration < 2) carDuration = 2;

  let wheelDuration = 2 - (speed / 100);
  if (wheelDuration < 0.2) wheelDuration = 0.2;

  car.style.animationDuration = carDuration + "s";
  wheels.forEach(w => w.style.animationDuration = wheelDuration + "s");
}

function increaseSpeed() {
  speed += 10;
  if (speed > 200) speed = 200;
  updateAnimation();
}

function decreaseSpeed() {
  speed -= 10;
  if (speed < 0) speed = 0;
  updateAnimation();
}

function stopCar() {
  speed = 0;
  updateAnimation();
}

function startCar() {
  if (speed === 0) {
    speed = 20;
    updateAnimation();
  }
}

updateAnimation();