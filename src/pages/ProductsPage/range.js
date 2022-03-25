var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
console.log(rangeslider);
output.innerHTML = rangeslider.value;



rangeslider.oninput = function() {
  output.innerHTML = this.value;
}