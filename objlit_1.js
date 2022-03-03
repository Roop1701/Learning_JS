var myPhone = {
  maker: "Apple",
  model: "iPhone",
  warrenty: 12,
  color: "black",
  ring: function () {
    console.log("Ring1 ring2 ring3");
  },
};
console.log(myPhone.maker);
console.log(myPhone["color"]);
//Object Literal Concepts
var x = "maker";
console.log(myPhone.x);

//Create a function that return a random property from myPhone
function getProperty() {
  var property = ["maker", "model", "color", "warrenty", "camera"];
  var y = 5 * Math.random(); //between 0 to 4 (total : 5)
  //Math.floor: 3.6 -> 3 , 2.52 -> 2
  y = Math.floor(y);
  var property = property[y];
  return myPhone[property];
}
console.log(getProperty());
