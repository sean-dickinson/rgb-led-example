let clickCount = 0;
const button = document.querySelector(".button");
const slider = document.querySelector('#rangeInput');
const LED = document.querySelector(".LED");
const rgb = [0,0,0];
button.addEventListener("click", () => {
    clickCount++;
    updateColor();
});
slider.addEventListener("input", updateColor);

function updateColor(){
    const value = slider.value;
    rgb[clickCount % 3] = parseInt(value);
    LED.style.background = `rgb(${rgb.join(',')})`;
}