function $tn(tagName) {
  return document.getElementsByTagName(tagName)[0];
}
function $(id) {
  return document.getElementById(id);
}
function $c(element) {
  return document.createElement(element);
}
function $t(text) {
  return document.createTextNode(text);
}
function $q(query) {
  return document.querySelector(query);
}
function $qa(query) {
  return document.querySelectorAll(query);
}
function clearActiveClass() {
  navElements.forEach(element => {
    // Remove "active" from nav elements
    if (element.parentNode.classList.contains("circle"))
      element.parentNode.classList.remove("active");
    else element.parentNode.parentNode.classList.remove("active");
  });

  // Remove "active" from content sections
  sections.forEach(element => {
    element.classList.remove("active");
  });
}
