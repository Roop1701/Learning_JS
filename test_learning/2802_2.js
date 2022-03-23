var div = document.querySelector("div");
var paragraphs = document.querySelector("p");
console.log(paragraphs);
function logHello() {
  console.log("Hello");
}
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", logHello);
}
var para_1 = document.createElement("p");
para_1.innerHTML = "Welcome to New Paragraph";
div.appendChild(para_1);
div.addEventListener("Click", function (event) {
  if (event.target && event.target.nodeName == "p") {
    console.log((event.target.innerHTML = "clICKED"));
  }
});
