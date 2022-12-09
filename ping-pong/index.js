const first = document.querySelector("#ftScreen");
let animation;
let px = 0;

window.addEventListener("load", draw);

function draw() {
  let ftContext = first.getContext("2d");

  ftContext.clearRect(0, 0, 500, 500);

  ftContext.fillStyle = "#fff";
  ftContext.fillRect(px, 0, 50, 50);

  px++;
  animation = requestAnimationFrame(draw);
}
