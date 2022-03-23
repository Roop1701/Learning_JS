var password: string = "Test@123412";
if (password.charCodeAt(1) >= 65 && password.charCodeAt(0) <= 90) {
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
}
//if  (password.charCodeAt(1) >= 65 && password.charCodeAt(0) <= 90)
// if (password.charCodeAt(1) >= 66 && password.charCodeAt(0) <= 90)
// if (password.charCodeAt(1) >= 65 && password.charCodeAt(0) <= 91)
//None of the above