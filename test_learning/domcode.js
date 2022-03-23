console.log(window);
//Access an element by id
console.log(document.getElementById("p1"));
console.log(typeof document.getElementById("p1"));
console.log(document.getElementById("p2"));
console.log(p1);
console.log(p1.innerHTML);
// Access a list of Elements by Tag Name
var paragraph = document.getElementsByTagName("p");
console.log(paragraph);
console.log(typeof paragraph);

// Access the first element with a certain charecter
var firstParagraph = document.querySelector("p");
console.log(firstParagraph);

var firstGreenElement = document.querySelector(".green");
console.log(firstGreenElement);

// Access a property of one of those elements in the HTML collection
console.log(paragraph[1].innerHTML);

//Access childern of a node
var bodyChildren = document.body.children;
console.log(bodyChildren);

//Add a New Child to the Body
var p = document.createElement("p");
console.log(p);
var textNode = document.createTextNode("A new pargraph has been added");
p.appendChild(textNode);
console.log(p);
document.body.appendChild(p);
console.log(window.document);

// Access a sibling
var sibling = p1.nextElementSibling;
console.log(sibling);

// Access the First or Last Child
var list = document.querySelector("ul");
console.log(list.firstChild);
console.log(list.lastChild);

// Concept of Parent Element
console.log(list.parentNode);

var BMW = document.querySelector("li");
console.log(BMW.parentNode);

// Change dom element by code

var test = document.getElementById("p1");
console.log(test.innerHTML);
test.innerHTML = "JS for Data Structure";
var test1 = document.getElementById("p2");
test1.innerHTML += "Testing number 2";
var test2 = document.getElementById("p3");
test2.textContent = "Something New";

var link1 = document.getElementById("link");
link1.setAttribute("href", "https://wikipedia.org");

//Change HTML Styling
p1.style.backgroundColor = "aqua";
p2.style.display = "none";
p3.style.color = "orange";

//Let's Change the Position
p1.style.position = "fixed";
p1.style.top = "200px";
//using the ForEach method, add a new brand to each list
var ul1 = document.getElementsByTagName("ul");
console.log(ul1);
// ul1.forEach(function (element) {
//   element.innerHTML += "<li>Ford</li>";
// });

console.log(ul1.length);
// Add forEach to the prototype of HTMLCollection
HTMLCollection.prototype.forEach = Array.prototype.forEach;
ul1.forEach(function (element) {
  element.innerHTML += "<li>Ford</li>";
});
console.log(ul1);
