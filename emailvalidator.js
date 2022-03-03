//test@gmail.com -> Valid
//test@test.mail.com -> Valid
//test.test.com -> Invalid
var email = "test@accounts.company.com";
var atposition = email.indexOf("@");
var dotposition = email.indexOf(".");
if (atposition == -1 || dotposition == -1) {
    console.log("Invalid Email ${email}");
}
else {
    console.log("Email is Valid");
}
