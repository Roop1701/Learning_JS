var div = document.querySelector("div");
var span = document.querySelector("span");
var p = document.getElementById("p");
function logDiv() {
  console.log("Div1");
}
function logP() {
  console.log("Paragraph");
}

function logSpan() {
  console.log("Span");
}
div.addEventListener("Click", logDiv, true);
p.addEventListener("Click", logP, true);
span.addEventListener("Click", logSpan);
