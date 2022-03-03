var courses: any = ["Angular", "React", "Java", "C++"];
courses.push("Cyber Security");
courses.push(20);

for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}
var x = courses[0];
var y = courses[1];
var [a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);
console.log(x);
