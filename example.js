const colorInput = document.querySelector("input");
const hexOutput = document.getElementById("hexCode");
const rgbOutput = document.getElementById("rgbCode");
const square = document.getElementById("square");

colorInput.addEventListener("input",function(){
    square.style.backgroundColor = colorInput.value;
    hexOutput.textContent = colorInput.value;
    rgbOutput.textContent = hexToRgb(colorInput.value);
});