var n1 = 10;
console.log(n1);
var s1 = "you are into the new typescript";
console.log(s1);
//Homogeneous array
var arr1 = ["J2EE", "J2ME", "Angular", "Node"];
console.log(arr1);
console.log(arr1[0]);
//Hetorogeneous array
var arr2 = ["test", 99, "sample", 100, true];
console.log(arr2);
// alret
// console.log("Hello");
// alert("Hello");
// confirm("Do you u want to know something?");
// var data = prompt("Please Enter Your nAME:");
// console.log(data);
// confirm
// prompt
// enum Gender {
//   Male,
//   Female,
// }
// console.log(Gender.Male);
// console.log(Gender.Female);
// console.log(Gender[0], Gender[1]);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
    WeekEnds[WeekEnds["Monday"] = 8] = "Monday";
    WeekEnds[WeekEnds["Tuesday"] = 9] = "Tuesday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
console.log(WeekEnds);
//New Style of String Never Tried
var s3 = "<a href='http://www.google.com'>Google</a>";
var userName = "Test User";
var s4 = "My Name is ".concat(userName);
console.log(s4);
console.log(s4.charAt(0));
console.log(s4.indexOf("T"));
console.log(s4.lastIndexOf("n"));
console.log(s4.length);
var x = 10;
var y = 11;
var z = 15;
if (x > y) {
    console.log("x is greater than y");
}
else if (z > x) {
    console.log("Numbers are equal");
}
else {
    console.log("x is less than y");
}
var x1 = 99;
switch (x1) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    default:
        console.log("Default");
}
var x2 = 1;
switch (x2) {
    case 1:
    case 2:
        console.log("Common Logic");
        break;
    case 3:
        console.log("Case 3");
        break;
    default:
        console.log("Default");
}
//Email validatior
var email = "test@test.com";
var atposition = email.indexOf("@");
var dotposition = email.indexOf(".");
if (atposition == -1 || dotposition == -1) {
    alert("Please enter a valid e-mail address ".concat(email));
}
else {
    console.log("Valid Email");
}
