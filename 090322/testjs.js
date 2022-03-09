"use strict";
// $(document).ready(function () {
//   var titleVar = $("div").attr("title");
//   console.log(titleVar);
// });

$(document).ready(function () {
  var titleVar_1 = $("div").attr("title");
  console.log(titleVar_1);
  $("#EpicButton").click(function () {
    $("div").attr("title", function (i, originalValue) {
      console.log(i);
      console.log(originalValue);
      //return "New Title";
      //   return i + 100;
    });
  });
});
