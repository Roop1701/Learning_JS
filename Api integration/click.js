var btn = document.querySelector("button");
var output = document.querySelector("output");
btn.addEventListener("click", getjoke);
function getjoke() {
  console.log("New Joke Coming");
  var xhr_1 = new XMLHttpRequest();
  url = "https://api.chucknorris.io/jokes/random";
  xhr_1.onreadystatechange = function () {
    if (xhr_1.readyState == 4 && xhr_1.status == 200) {
      var str_1 = xhr_1.responseText;
      var obj_1 = JSON.parse(str_1);
      var str_2 = JSON.stringify(obj_1);
      output.innerHTML = obj_1.value;
    }
  };

  xhr_1.open("GET", url);
  xhr_1.send();
}
