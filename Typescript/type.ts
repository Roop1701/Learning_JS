var n1: number = 10;
console.log(n1);

var s1: string = "you are into the new typescript";
console.log(s1);

//Homogeneous array
var arr1: Array<string> = ["J2EE", "J2ME", "Angular", "Node"];

console.log(arr1);
console.log(arr1[0]);

//Hetorogeneous array
var arr2: Array<any> = ["test", 99, "sample", 100, true];
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

enum WeekEnds {
  Saturday = 6,
  Sunday = 7,
  Monday,
  Tuesday,
}

console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
console.log(WeekEnds);

//New Style of String Never Tried

var s3: string = "<a href='http://www.google.com'>Google</a>";
var userName: string = "Test User";
var s4: string = `My Name is ${userName}`;
console.log(s4);
console.log(s4.charAt(0));
console.log(s4.indexOf("T"));
console.log(s4.lastIndexOf("n"));
console.log(s4.length);

var x: number = 10;
var y: number = 11;
var z: number = 15;
if (x > y) {
  console.log("x is greater than y");
} else if (z > x) {
  console.log("Numbers are equal");
} else {
  console.log("x is less than y");
}
var x1: number = 99;
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

var x2: number = 1;

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

var email: string = "test@test.com";
var atposition: number = email.indexOf("@");
var dotposition: number = email.indexOf(".");
if (atposition == -1 || dotposition == -1) {
  alert(`Please enter a valid e-mail address ${email}`);
} else {
  console.log("Valid Email");
}
