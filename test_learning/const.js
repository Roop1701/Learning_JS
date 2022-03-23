// Generic Object Constructor

var myPhone = new Object();
// Same is if wrote
// var myPhone = {};
myPhone.make = "Realme";
myPhone.model = "Realme 5";
myPhone.warrenty = 12;
myPhone.color = "black";
myPhone.ring = function () {
  console.log("Ring 1 Ring 2 Ring3");
};

console.log(myPhone);

//Logic of Constructor

function phone(make, model, warrenty, color) {
  this.make = make;
  this.model = model;
  this.warrenty = warrenty;
  this.color = color;
  this.extenedWarrenty = function (x) {
    this.warrenty += x;
  }; // not expected in terms of good programmer's aspect
}

var myNewPhone = new phone("Apple", "iPhone X", 12, "Golden");
console.log(myNewPhone);
myNewPhone.extenedWarrenty(12);
console.log(myNewPhone);
// How can you add a new property to an object

myNewPhone.condition = "Brand New";
console.log(myNewPhone);

var myOtherPhone = new phone("Realme", "Realme 5", 12, "Black");
console.log(myOtherPhone);
myOtherPhone.extenedWarrenty(14);
console.log(myOtherPhone);

//Add a Condition property to all phones

console.log(phone.prototype);

//Implement concept of Prototype
phone.prototype.ring = function () {
  console.log("Ring 1 Ring 2 Eing3");
};

phone.prototype.extenedWarrenty = function (x) {
  this.warrenty += x;
};
phone.prototype.condition = "New";

//Primitive

var x = 1;
var y = 1;
console.log(x == y);

// Objects
var myPhone1 = {
  make: "Apple",
  model: "Iphone 7",
};
var myPhone2 = {
  make: "Apple",
  model: "Iphone 7",
};

console.log(myPhone1 == myPhone2);

var myPhone3 = myPhone;
console.log(myPhone == myPhone3);

var namePrimitive1 = "John";
var namePrimitive2 = "SAM";
var nameObject1 = new String("John");
var nameObject2 = new String("SAM");

console.log(typeof nameObject1);
console.log(typeof namePrimitive1);
console.log((namePrimitive1 = namePrimitive2));
console.log((nameObject1 = nameObject2));

var myString1 = "JavaScript";
var myString2 = "This is Dyamic Programming";
var String3 = "JAVA";
var String4 = "Completeky New Programming Aspect ";
console.log(myString1.charAt(0));
console.log(myString1.concat(myString2));
//Does myString1 include String3
console.log(myString1.includes(String3));
//index of something

console.log(myString1.indexOf("a"));
console.log(myString1.lastIndexOf("a"));

console.log(myString1.toUpperCase());
console.log(String4.toLowerCase());

var y1 = new String("joy");
console.log(y1);
y2 = y1.toString();
console.log(y2);
console.log(y1);
console.log(typeof y1);
console.log(typeof y2);

//Concept of Data Object
// Year, MM , DD , HH , MM , SS , MS if 2 arg are provided , the rest is considered
// as 0 or 1

var x = new Date(2022, 02, 15, 09);
console.log(x);

// opposite from date to numeric value

console.log(x.getTime());

// numeric value conresponding to the current time
var y3 = Date.now();
console.log(y3);
var z = new Date();
console.log(z);
console.log(z.getDay());

var year = prompt("Please Specify the Year");
var month = prompt("Please Specify the Month");
var day = prompt("Please Specify the Day");

z1 = new Date(year, month, day);
var day = z1.getDay();
var days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
console.log("You were born on a " + days[day]);
