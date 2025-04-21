function changeText() {
  const textElement = document.getElementById("text-content");
  textElement.textContent =
    "The text has been changed! You've successfully interacted with the DOM.";
}

function modifyStyles() {
  const styledText = document.getElementById("styled-text");
  styledText.style.color = "green";
  styledText.style.fontSize = "24px";
  styledText.style.fontWeight = "bold";
}

function toggleElement() {
  const dynamicElement = document.getElementById("dynamic-element");

  if (dynamicElement.innerHTML === "") {
    dynamicElement.innerHTML =
      "<p>This is a dynamically added paragraph. Click the button to remove it!</p>";
  } else {
    dynamicElement.innerHTML = "";
  }
}
