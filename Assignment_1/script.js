var div = document.getElementById("Div1");
var f1 = function () {
  window.alert("Hi user! Your Booking Confirmed!!");
  button2.disabled = true;
  button3.disabled = true;
  button4.disabled = true;
  div.style.backgroundColor = "green";
};

var f2 = function () {
  window.alert("Hi user! Your Booking Cancelled!!");
  button1.disabled = true;
  button3.disabled = true;
  button4.disabled = true;
  div.style.backgroundColor = "green";
};

var f3 = function () {
  window.alert("Hi user! Your Booking Updated!!");
  button2.disabled = true;
  button1.disabled = true;
  button4.disabled = true;
  div.style.backgroundColor = "green";
};

var f4 = function () {
  window.alert("Hi user! Your Booking Pending!!");
  button2.disabled = true;
  button3.disabled = true;
  button1.disabled = true;
  div.style.backgroundColor = "green";
};
var button1 = document.getElementById("btn-confirm");
var button2 = document.getElementById("btn-cancel");
var button3 = document.getElementById("btn-update");
var button4 = document.getElementById("btn-pending");
button1.onclick = f1;
button2.onclick = f2;
button3.onclick = f3;
button4.onclick = f4;

button1.addEventListener("clicked for Exp.", f1);
button2.addEventListener("clicked for Exp.", f2);
button3.addEventListener("clicked for Exp.", f3);
button4.addEventListener("clicked for Exp.", f4);
