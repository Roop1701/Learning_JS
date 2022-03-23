//MouseDown
var img_1 = document.querySelector("img");
var button_1 = document.getElementById("button1");
button_1.addEventListener("mousedown", fmousedown);
function fmousedown(event) {
  console.log(event);
}
// MouseMovement
addEventListener("mousemove", fmousemove);
function fmousemove(event) {
  img_1.style.left = event.pageX + "px";
  img_1.style.top = event.pageY + "px";
}
addEventListener("mouseup", fmouseup);
function fmouseup(event) {
  var img_2 = document.createElement("img");
  img_2.setAttribute(
    "scr",
    "https://e7.pngegg.com/pngimages/252/43/png-clipart-black-and-brown-monarch-butterfly-monarch-butterfly-insect-monarch-butterfly-brush-footed-butterfly-insects.png"
  );
  img_2.setAttribute("height", "70");
  img_2.setAttribute("width", "70");
  img_2.style.position = "fixed";
  document.body.appendChild(img_2);
  img_2.style.left = event.pageX + "px";
}
