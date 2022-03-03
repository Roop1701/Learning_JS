console.log(window);
//Assume we would like to get access by ID
console.log(typeof document.getElementById("p1"));
console.log(document.getElementById("p1"));
//It is applicable , if a web page containing a paragraph
//if don't have please create a paragraph using <p> and start getting access.
// //If you have any paragraph can be acccessed?
// console.log(p1); // In my case no paragraph so not getting inside msg
// //If we would like to find p1 insider code
// console.log(p1.innerHTML); // it will show you <p> syntax
// //Access a list element by tag name
var paragraph = document.getElementsByTagName("p");
console.log(paragraph);

// Access the first element with a certain characteristic
var firstParagraph = document.querySelector("p");
console.log(firstParagraph);

// If we would like to find the green elements
var firstGreenElement = document.querySelector(".green");
console.log(firstGreenElement);

// Access properties of one those elements in the HTML collection
console.log(document.get);

//if we would like to find the property of one paragraph
//console.log(paragraph[1].innerHTML);

// Acess children node

var bodyChildern = document.body.children;
console.log(bodyChildern);

// Add a New Child to the body

var p = document.createElement("p");
console.log("p");

var textNode = document.createTextNode("A new Paragraph");
p.appendChild(textNode);
console.log(p);
document.body.appendChild(p);

// Reason Behind the use of append keyword is that, it will be able
// to add new one after the existing one.

console.log(window.document);

//Access a Sibling
// var sibling = p.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(sibling);

//Access First or Last Child
var list = document.querySelector("ul");
console.log(list.firstChild);
console.log(list.lastChild);
//ul = unorderd list
// lET'S create oen unorderd list to a web page
//BMW
//Audi
//Mercedes
//Parent Element
var bmw = document.querySelector("li");
console.log(bmw.parentNode);
