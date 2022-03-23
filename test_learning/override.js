// Case 1:
// var greet = "Hello";
// function greet() {
//   return "Welcome to Over Ride Method";
// }
// console.log(typeof greet);
// greet(); // We will get error beacuse great will create issue
// Case 2:
var greet = "Hello";
var greet = function () {
  return "Over ride method";
};

console.log(typeof greet);
