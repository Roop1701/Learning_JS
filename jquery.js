console.log($("p"));
$("#p2").css("background-color", "red");
//$(".red").removeClass("red"); If any class assocdiated with
//console.log($(".red").removeClass("red"));
//Addition of new class to css wihtout getting any entry to css file
$(".red").removeClass("red").addClass("blue");
var a = setTimeout(function () {
  $('[name="p3"]').fadeOut;
}, 3000);
var b = setTimeout(function () {
  $('[name="p3"]').fadeIn;
}, 5000);
// $('[name="p3"]').fadeOut();
// $('[name="p3"]').fadeIn();
$("p").css("font-size", "25px");
$("a").attr("href", "https://wikipedia.org");
$("a").attr("target", "blank");
console.log($("#p3").html());
$("#p3").html("Paragraph 3 Changed");
$("input").val("Mark");
console.log($("input").val());
$("div").addClass("grey");
$("div").width(375);
