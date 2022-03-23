addEventListener("keydown", fkeydown);
function fkeydown(event) {
  //console.log(event);
  console.log(event.keyCode);
  console.log(event.ctrlkey);
  //When user is going to trigger/press CTRL IT see the changes
  console.log(String.fromCharCode(event.keyCode));
  document.body.style.backgroundColor = "aqua";
}
addEventListener("keyup", fkeyup);
function fkeyup(event) {
  document.body.style.backgroundColor = "orange";
}
