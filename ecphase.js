var x = "Hi";

logHello();
logHi();
logHiHello();
logHelloHi();
logBye();

function logHello() {
  console.log("Welcome of Functional Programming");
}

function logHi() {
  //console.log("New Approach of Programming");
  console.log(x);
  var y;
}

function logHiHello() {
  logHi();
  logHello();
}

function logHelloHi() {
  logHello();
  logHi();
}
function logBye() {
  var z = 1;
  function fNotGlobal() {
    console.log("Bye");
  }
  fNotGlobal();
}
// In Ascpect to Hoisting Method
// Variables stored as undefined-x
// Functions fully stored in memory
// logHello(), logHi() , logHiHello() , logHelloHi() , logBye()
// logHello Execution Sytle:
//function logHello(){
// console.log('Hello');
//} -> console.log('Hello'); -> window this method
// logHiHEllo()
