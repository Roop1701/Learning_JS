// Create function in JS
function greeting() {
  console.log("Hello World");
}
greeting();

// Function with parameters:
function greeting2(firstname) {
  console.log("Hello " + firstname);
}
var y = greeting2("Sam");
console.log(y);
function sum(a, b) {
  return a + b;
}
var x = sum(9, 10);
console.log(x);

//Return a function from a function:
//Inside a function, we can assign multiple sub functions
// function greet() {
//   return function () {
//     console.log("Nested function");
//   };
// }
// greet()();
// function greet1(x) {
//   return function (name) {
//     console.log(x + " " + name);
//   };
// }
// greet1("Hello")("Sam");
// greet("Hi")("Testing");

// console.log(greet("How Feeling"));
//Pass by Value vs pass by reference
//Outside Functions

var a = 1;
var b = a;
a++;
console.log(a);
console.log(b);
var house1 = {
  type: "Terraced",
  town: "Kolkata",
};
var house2 = house1;
house1.town = "New Town";
console.log(house1);
console.log(house2);

var c = 1;
function addOne(x) {
  x++;
}
addOne(c); //addOne(1)
console.log(c); // c is still 1 because copy of c is used in the function

function add1() {
  c++;
}
add1();
console.log(c);

// One More Testing Case

var person1 = {
  name: "X",
  age: 20,
};

var person2 = person1;
function addYear(person1) {
  person1.age++;
}
addYear(person1);
console.log(person1);

//First Class Functions
var sum = function (a, b) {
  return a + b;
};
console.log(sum(1, 2));

var myPhone = {
  make: "Apple",
  model: "Iphone X",
  warrenty: 12,
  color: "Black",
  showWarrenty: function () {
    console.log("This phone has " + this.warrenty + " months of warrenty");
  },
};
myPhone.showWarrenty();
//Pass a Value to a function
//IIFE : Immediately Invoked Function Expression
function greet() {
  console.log("Hello World");
}
greet();
//Function Expression

var greet2 = (function () {
  console.log("Hi");
})();
console.log(greet2);
