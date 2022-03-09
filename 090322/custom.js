"use strict";
// $(document).ready(function () {
//   $("#EpicButton").click(function () {
//     console.log($("div").text());
//     $("div").text("Awesome Exp.");
//   });
// });
// $(document).ready(function () {
//   $("#EpicButton").click(function () {
//     var name = $("div").data("name");
//     var age = $("div").data("age");
//     console.log(name);
//     console.log(age);

//     $("div").data("name", "BATMAN");
//     name = $("div").data("name");
//     console.log(name);
//     console.log(age);
$(document).ready(function () {
  $("#EpicButton").click(function () {
    console.log($("div").html());
    $("div").html("<b>Awesome Exp.</b>");
  });
});
