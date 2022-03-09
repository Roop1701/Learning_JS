"use strict"
$(document).ready(function(){
    var titleBar = 3 = $("div").attr("title")
    console.log(titleBar);
    $("#EpicButton").click(function(){
        $("div").removeAttr("title");
    });
    // $("#EpicBuuton").click(function(){
    //     $("div").attr(
    //         {
    //             "title" : "Epic  Div",
    //             "epicAttr" : "You are welcome"
    //         }
    //     )
    // })
})