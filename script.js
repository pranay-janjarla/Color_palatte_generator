document.addEventListener("DOMContentLoaded", function() {
  // Generate initial palette
  generatePalette();

  // Add click event listener to the button
  const generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", generatePalette);
});

function generatePalette() {
  const colorPalette = document.getElementById("color-palette");

  // Clear any existing colors
  colorPalette.innerHTML = "";

  // Generate 5 random colors
  for (let i = 0; i < 5; i++) {
    const randomColor = generateRandomColor();
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = randomColor;
    colorBox.addEventListener("click", function() {
      copyColorHex(randomColor); // Pass the random color to the copyColorHex function
    });
    colorPalette.appendChild(colorBox);
  }
}

function generateRandomColor() {
  // Generate a random hexadecimal color code
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function copyColorHex(colorHex) {
  // Create a temporary input element to copy the HEX code to the clipboard
  const input = document.createElement('input');
  input.value = colorHex;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);

  // Show a message or perform any other action to indicate successful copying
  console.log("Color HEX code copied: " + colorHex);
}

function copyAllHexCodes() {
  const colorBoxes = document.querySelectorAll(".color-box");
  let allHexCodes = "";

  colorBoxes.forEach(colorBox => {
    const colorHex = colorBox.getAttribute("data-color");
    allHexCodes += colorHex + "\n";
  });

  // Create a temporary textarea element to copy all HEX codes to the clipboard
  const textarea = document.createElement('textarea');
  textarea.value = allHexCodes;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Show a message or perform any other action to indicate successful copying
  console.log("All HEX codes copied:\n" + allHexCodes);
}
