var clickCount = 0;
var button = document.querySelector(".button");
var slider = document.querySelector('#rangeInput');
var LED = document.querySelector(".LED");
var rgb = [0,0,0];
button.addEventListener("click", function() {
    clickCount++;
    updateColor();
});
slider.addEventListener("input", updateColor);

function updateColor(){
    var value = slider.value;
    rgb[clickCount % 3] = parseInt(value);
    LED.style.background = 'rgb('+rgb.join(',')+')';
}