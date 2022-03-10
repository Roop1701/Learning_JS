"use strict";
$(document).ready(function () {
  var titlevar = $("div").attr("title");
  console.log(titlevar);
  $("EpicButton").click(function () {
    $("div").attr({
      title: "Marvel War",
      epicAttr: "Thanos",
    });
  });
});
