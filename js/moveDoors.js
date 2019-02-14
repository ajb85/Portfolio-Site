// $ functions are located in ./js/commonFunctions.js

const contentBoxes = $qa(".content");
// Move doors on click
contentBoxes.forEach(box => box.addEventListener("click", animateSides));

function animateSides(e) {
  const leftDiv = $q(".left");
  const rightDiv = $q(".right");

  // If doors are already open
  // if(leftDiv.classList.contains("animate")) {
  //   closeDoors(leftDiv, rightDiv);
  //   openDoors(leftDiv, rightDiv);
  // }

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

function loadContent(target) {
  let div = target;
  const content = $q(".loadContent");
  // Find the parent DIV element so we can grab the name of the <h2> element
  while (div.tagName !== "DIV") {
    div = div.parentNode;
  }
  const section = div.querySelector("h2").textContent;
  console.log(section, typeof section);

  jQuery(content).load(`./sections/${section.toLowerCase()}.html`);
}
