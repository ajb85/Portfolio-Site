// $ functions are located in ./js/commonFunctions.js

// Move doors on click
$qa("button.tooth").forEach(box =>
  box.addEventListener("click", e => animateSides(e))
);

// cta click -- load Social for now
$q("button.cta").addEventListener("click", () =>
  animateSides({ target: $qa("button.tooth")[3] })
);

// Return doors to closed when home is clicked
const homeBtn = $q(".homeBtn");
homeBtn.addEventListener("click", e => animateSides(e, "home"));

function animateSides(e, home) {
  const leftDiv = $q(".left");
  const rightDiv = $q(".right");

  // If doors are already open
  if (leftDiv.classList.contains("animate") && !home) {
    // Eventually would like to check for current content loaded and see
    // if its what was clicked.  If so, do nothing.
    changeDoors("reopen");
    setTimeout(() => {
      loadContent(e.target);
      changeDoors("reopen");
    }, 500);
  } else {
    // If we're just opening or closing the doors
    if (!home) {
      loadContent(e.target);
    }
    changeDoors();
    homeBtn.classList.toggle("animate");
  }

  function changeDoors(reopen) {
    setTransitionTime();
    toggleClasses(reopen);
  }
  function setTransitionTime() {
    // Set transition time for animation
    leftDiv.style.transitionDuration = "0.5s";
    rightDiv.style.transitionDuration = "0.5s";

    // Remove transition after animation so boxes don't bounce
    // on screen resize
    setTimeout(() => {
      leftDiv.style.transitionDuration = "0s";
    }, 500);
    setTimeout(() => {
      rightDiv.style.transitionDuration = "0s";
    }, 500);
  }
  function toggleClasses(reopen) {
    // If we are just moving the doors once, flip vis on icons, text
    if (!reopen) {
    }
    // Once the animate class is toggled on, doors open
    // Toggled off, doors closed
    leftDiv.classList.toggle("animate");
    rightDiv.classList.toggle("animate");
  }
}

function loadContent(target) {
  let button = target;
  const content = $q(".loadContent");
  // Find the parent button element so we can grab the name of the first <h2> element
  while (button.tagName !== "BUTTON") {
    button = button.parentNode;
  }
  const section = button.querySelector("h2").textContent;

  jQuery(content).load(`./sections/${section.toLowerCase()}.html`);
}
