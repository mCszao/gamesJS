const first = document.querySelector("#ftScreen");
let animation;
let py = 0;

let moviment = function () {
  let ftContext = first.getContext("2d");

  ftContext.clearRect(0, 0, 600, 600);
  ftContext.fillStyle = "#fff";
  ftContext.fillRect(0, py, 50, 50);
  window = requestAnimationFrame(moviment);
  py++;
};
window.onload = moviment;
