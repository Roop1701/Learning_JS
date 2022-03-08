var xhr_1 = new XMLHttpRequest();
var url_1 = "https://api.chucknorris.io/jokes/random";
xhr_1.onreadystatechange = function () {
  console.log(xhr_1.readyState);
  if (xhr_1.readyState == 4 && xhr_1.status == 200);
  console.log(xhr_1.responseText);
  var str_1 = xhr_1.responseText;
  var obj_1 = JSON.parse(str_1);
  output.innerHTML = obj_1.value;
  console.log(obj_1);
};
xhr_1.open("GET", url_1);
console.log(xhr_1);
xhr_1.send();
//bASICALLY TWO METHODS ARE AVAILABLE DURING TAKING INPUT
//GET AND POST//To make our application industry oriented - We Must
//put some advanced concept to
