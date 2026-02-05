const petalFall = document.getElementById("petalFall");
const sparkles = document.getElementById("sparkles");
const dome = document.getElementById("dome");

// Falling petals
setInterval(() => {
  let petal = document.createElement("div");
  petal.classList.add("falling");
  petal.style.left = Math.random() * 200 + "px";
  petal.style.animationDuration = (2 + Math.random()*3) + "s";
  petalFall.appendChild(petal);

  setTimeout(() => petal.remove(), 5000);
}, 400);

// Sparkles
setInterval(() => {
  let sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * 200 + "px";
  sparkle.style.top = Math.random() * 280 + "px";
  sparkles.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 2000);
}, 200);

// Mouse 3D movement
document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth/2 - e.clientX) / 40;
  let y = (window.innerHeight/2 - e.clientY) / 40;
  dome.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}
