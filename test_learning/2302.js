// Remove a child element
// var list1 = document.getElementById("list1");
// var item1 = document.getElementById("item1");
// list1.removeChild(item1);

//Build a method remove which removes any element from the dom
// Element.prototype.remove = function () {
//   var parent = this.parentElement;
//   parent.removeChild(this);
//   this.parentElement.removeChild(this);
//   //this.parentEleemnt.removeChild(this);
// };
// list1.remove();

//We can use first option but if we have ul with 50 elements then it will create
// complexity, we need to write line no.3 upto 50 items
// ul can be remove item by item only

//Event handling part 1
var fun_1 = function () {
  console.log("You Clicked on Button1");
};
var fun_2 = function () {
  console.log("You Clicked on Button2");
};
var button1 = document.getElementById("button1");
// button1.onclick = fun_1;
// button1.onclick = fun_1;
// button1.onclick = fun_2;
button1.addEventListener("Click", fun_1); //After Click what next?
button1.addEventListener("Click", fun_2);

button1.removeEventListener("Click", fun_2); //disable button type

//Buuton2 Operation

var button2 = document.getElementById("button2");
button2.ondblclick = function () {
  var p1 = document.getElementById("p1");
  p1.style.backgroundColor = "aqua";
};

var p2 = document.getElementById("p2");
p2.onlick = function () {
  this.style.backgroundColor = "red";
};

//SetInterval
// 0 100:sin(x): -1 1

var title = document.getElementById("title");
title.onlick = function () {
  this.style.position = "fixed";
  var x = 0;
  var a = setInterval(function () {
    x++;
    title.style.top = 100 * Math.six(x) + "px";
  }, 100);
};
