var input_1 = document.querySelector("input");
//focus concept

input_1.addEventListener("blur", ffocus);
function ffocus(event) {
  console.log(event);
  console.log(event.target.value);
}
var a1 = document.querySelector("a");
a1.addEventListener("Click", fPreventDefault);
function fPreventDefault(event) {
  //console.log(fPreventDefault);
  event.preventDefault();
}
