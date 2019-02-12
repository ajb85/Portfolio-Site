const container = document.querySelector(".zipper");
// Move doors on click
container.addEventListener("click", animateSides);

function animateSides() {
  const leftDiv = document.querySelector(".left");
  const rightDiv = document.querySelector(".right");

  // Set transition time for animation
  leftDiv.style.transitionDuration = "0.5s";
  rightDiv.style.transitionDuration = "0.5s";

  // Once the animate class is toggled on, doors open
  // Toggled off, doors closed
  leftDiv.classList.toggle("animate");
  rightDiv.classList.toggle("animate");

  // Remove transition after animation so boxes don't bounce
  // on screen resize
  setTimeout(() => {
    leftDiv.style.transitionDuration = "0s";
  }, 500);
  setTimeout(() => {
    rightDiv.style.transitionDuration = "0s";
  }, 500);
}
