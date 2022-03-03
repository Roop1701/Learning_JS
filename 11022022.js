//prompt: This is exclusive used to take input from the user.
//in from of pop-up window.
//How to create an alert
window.alert("Today is Friday Sale!!");
// Eval built-in function
eval("var a = 1");
console.log(a);
var x = 0;
function count() {
  console.log(x);
  x++;
  if (x == 10) {
    clearInterval(counter);
  }
}

//How to set interval
var counter = setInterval(count, 1000);

//How to cretate Timeout based Application
setTimeout(function () {
  console.log("I have been waiting for 5 minutes");
}, 50000);
