// console.log(Math.PI);

// //Example_1
// var x = Math.random();
// console.log(x);

// x = Math.round(3.4);
// console.log(x);

// x1 = Math.round(3.5);
// console.log(x1);

// // Floor vs Round

// x2 = Math.floor(3.6);
// console.log(x2);
// x1 = Math.round(3.4);
// console.log(x1);

// // SQRT

// x = Math.sqrt(4);
// console.log(x);

// // Cos
// x = Math.cos(45);
// console.log(x);

// Lets create an object

var person = {
  name: "Mark 2",
  state: "Cal",
  birth: 1984,
};

// Lets Create line No. 31 in form of JSON

var personJSON = {
  name: "Mark Z",
  state: "California",
  birth: 1984,
};
var personJSON2 = {
  name: "Mark",
  state: "California",
  birth: 1984,
};

console.log(personJSON);
console.log(personJSON2);
console.log(typeof personJSON);
console.log(typeof personJSON2);

var personString = JSON.stringify(personJSON);
console.log(
  personString == '{ "name": "Mark Z", "state": "California", birth: 1984 }'
);

var stringParsedAsJSON = JSON.parse(personString);
console.log(stringParsedAsJSON);

// Array object

var shoppingList = ["Orange", "Banana", "Apple"];
console.log(shoppingList);
var shoppingList2 = new Array("Bread", "Butter", "Milk");
console.log(shoppingList2);
shoppingList[1] = "Pear";
console.log(shoppingList);

// Push Method

var x = shoppingList.push("Cherry");
console.log(shoppingList);
// Pop Method
shoppingList.pop();
console.log(shoppingList);

// go to the element of index 1
// remove two elements staring from index 1
//replace them with grape and strawberry
shoppingList.splice(1, 2, "Grape", "Strawberry");
console.log(shoppingList);

// Return two elements starting from position 0
// this return a new array

x = shoppingList.slice(0, 2);
console.log(x);

// Sorting
shoppingList.sort();
console.log(shoppingList);

// Reverse of any array
shoppingList.reverse();
console.log(shoppingList);

// ShoppingList-organge, banan etc .... I would like to add delcious fruit
var addDelicious = function (n) {
  return "Delicious" + n;
};
x = shoppingList.map(addDelicious);
console.log(x);

// Filter
var numbers = [34, 57, 10, 49, 747, 23, 39, 82];
x = numbers.filter(function (n) {
  return n % 3 == 0;
});
console.log(x);

var num1 = [34, 57, 10, 49, 747, 23, 39, 82];
var testfunction = function (n) {
  return n % 3 == 0;
};

x = num1.filter(testfunction);
console.log(x);
x = num1.every(testfunction);
console.log(x);

// Looping through array using forEach

var shoppingList3 = ["Orange", "Banana", "Apple"];
console.log(shoppingList3);

for (var i = 0; i < shoppingList3.length; i++) {
  console.log(shoppingList3);
}
shoppingList3.forEach(function (element) {
  console.log(element);
});
