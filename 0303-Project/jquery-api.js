//To get some paragraph text for testing purpose
//www.blindtextgenerator.com/snippets/
//to disbale any href , write "href=#"

// $("li").css({
//   color: "red",
//   border: "1px solid brown",
//   fontSize: "25px",
//   backgroundColor: "aqua",
// });

//Content Management using Jquery directly
// $("li").text("Hello<br>World");
// $("li").html("Hello<br>World");
// $("li").append("<div> Testing Done</div>");
// $("li").prepend("Testing for new style");

//https:api.jquery.com/

// $("h1").click(function () {
//   console.log("h1 clicked");
//   $("h1").css("color", "brown");
// });
// $("li").click(function () {
//   console.log("clicked");
//   //   console.log($(this));
//   $(this).text("Clicked");
//   //   $(this).addClass("green");
//   $(this).toggleClass("red");
// });

//Document Ready Listner
// $(document).ready(function () {
//   console.log("Loaded & full ready to go");
//   $("a").click(function (E) {
//     E.preventDefault();
//     $(this).css("color", "red");
//   });
// });

$(document).ready(function () {
  $("h1").mouseenter(function () {
    $(this).addClass("red");
  });
  $("h1").mouseout(function () {
    $(this).removeClass("red");
  });
});
