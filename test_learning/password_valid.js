var password = "Test@123412";
if (password.charCodeAt(1) >= 65 && password.charCodeAt(0) <= 90) {
    console.log("Valid Password");
}
else {
    console.log("Invalid Password");
}
