// // Object = Collection of Properties
// var myPhone = {
//   make: "Realme",
//   model: "8i",
//   warrenty_months: 12,
//   color: "Purple blue",
// };
// console.log(myPhone);
// console.log(myPhone.model);
// // How to change property value
// myPhone.model = "8pro";
// console.log(myPhone);
// // How to add property
// myPhone.storage = "256 GB";
// console.log(myPhone);
// // How to delete property
// delete myPhone.storage;
// console.log(myPhone);
// // Something new Concept

// var x = 1;
// var y = x; // y stores the value 1
// x = 2; // x stores the value 2
// console.log(y);

// // is it applicable for objects
// var myOtherPhone = myPhone;
// console.log(myOtherPhone);
// myPhone.color = "gold";
// console.log(myPhone);
// console.log(myOtherPhone);
//concept of if else
var balance = 10000;
var price = 500;
if (balance >= price) {
  console.log("Payment Successful");
  balance = balance - price;
} else {
  console.log("Insufficient Balance");
}

// More problem
var speed = 100;
if (speed > 70) {
  console.log("You are driving too fast");
} else if (speed < 40) {
  console.log("You are driving too slow");
} else {
  console.log("You are driving at the right speed");
}

// Switch Case
var userInput = "Winter";
switch (userInput) {
  case "Autumn":
    console.log("It is Autumn");
    break;
  case "Summer":
    console.log("It is Summer");
    break;
  case "Winter":
    console.log("It is Winter");
    break;
  case "Spring":
    console.log("It is Spring");
    break;
  default:
    console.log("Invalid Input");
}

// Implement For Loop
for (var i = 0; i < 10; i++) {
  console.log(Math.pow(i, 2));
}

// loop through array
var myArray = ["Apple", "Banana", "Orange"];
for (var i = 0; i < myArray.length; i++) {
  console.log("Item" + i + ":" + myArray[i] + ".");
}

// Loop through an array and change it

var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numberList.length; i++) {
  numberList[i] += 10;
}
console.log(numberList);

//Implement While Loop
var balance1 = 1000;
var itemNumber = 0;
while (balance1 > 0) {
  // pick a random item
  var itemPrice = Math.floor(Math.random() * 100);
  // check if you have enough money
  if (balance1 >= itemPrice) {
    // buy item
    balance1 = balance1 - itemPrice;
    itemNumber++;
    // Print the New/Updated Balance and the Purpase amount
    console.log(
      itemNumber + " " + "item price:" + itemPrice + " " + "balance:" + balance1
    );
  }
}

// //Implement While Loop
// //For user input please use prompt
// var balance1 = prompt("Enter your balance");
// var itemNumber = 0;
// while (balance1 > 0) {
//   // pick a random item
//   var itemPrice = Math.floor(Math.random() * 100);
//   // check if you have enough money
//   if (balance1 >= itemPrice) {
//     // buy item
//     balance1 = balance1 - itemPrice;
//     itemNumber++;
//     // Print the New/Updated Balance and the Purpase amount
//     console.log(
//       itemNumber + " " + "item price:" + itemPrice + " " + "balance:" + balance1
//     );
//   }
// }
