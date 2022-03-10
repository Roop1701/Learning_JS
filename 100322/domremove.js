"use strict";
$(document).ready(function () {
  var titlevar = $("div").attr("title");
  console.log(titlevar);
  $("#EpicButton").click(function () {
    $("div").removeAttr("title");
  });
});
