var n1: number = 10;
console.log(n1);
var s1: string = "You are student of SNU";
var s2: string = "You are student of CSE";
console.log(s1);
console.log(s2);
var a1: any = {
  productId: 1,
  productName: "Laptop",
  productPrice: 20000,
};
console.log(a1);

//Homogenous Array
var arr1: Array<string> = ["Javascript", "Typescript", "Angular"];
console.log(arr1);

//Heterogenous Array
var arr2: Array<any> = [123, "Typescript", "Angular", true];
console.log(arr2);

//String Functions
var s3: string = "<a href = ' '/>";
var userName: string = "Test";
var s4: string = "My \\ name is ${userName}";
console.log(s4);
// Union Concept

var untype: string | number;
untype = "Test1";
untype = 123;

//Assignment operator
var num1: number = 10;
var num2: number = 11;
var num3: number = num2;
num3 += num2;
console.log(num3);
