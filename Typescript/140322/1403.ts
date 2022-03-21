var coursename: any = ["Angular", "React", "J2EE", "ES6", "C++"];
coursename.push("OOPsusingDS");
coursename.push(20);
for (var i = 0; i < coursename.lengthl; i++) {
  console.log(coursename[i]);
}
var x = coursename[0];
var y = coursename[1];

var [a, b, c, d] = coursename;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

var student = {
  firsName: "John",
  lastName: "test",
  score: 100,
};

for (var item in student) {
  console.log(item);
  console.log(student[item]);
}

var { firsName, lastName } = student;
console.log(firsName + "" + lastName);

var levels: number[] = [20, 30, 12, 30, 100, 20];
console.log(levels.toString());
console.log(levels.join(" "));
//console.log(levels.slice(3, 5));
console.log(levels.slice(3));
console.log(levels.toString());
console.log(levels.splice(2, 3, 88, 88));
console.log(levels.toString());
