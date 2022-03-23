// function LongFunction() {
//   var x = 0;
//   while (x < 100) {
//     console.log(x);
//     x++;
//   }
//   console.log("LongFunction Conplete");
// }
// //Listen to a Click
// function clickHandler() {
//   console.log("Click event");
// }
// document.addEventListener("click", clickHandler);
// LongFunction();

// Debouncing
document.addEventListener("mousemove", function (event) {
  //   console.log(event.pageX);
  //   console.log(event.pageY);
  setTimeout(function () {
    console.log("Your Current Position");
    console.log(event.pageX);
    console.log(event.pageY);
  }, 100);
});
