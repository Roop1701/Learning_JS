//test@gmail.com -> Valid
//test@test.mail.com -> Valid
//test.test.com -> Invalid

var email: string = "test@accounts.company.com";
var atposition: number = email.indexOf("@");
var dotposition: number = email.indexOf(".");

if (atposition == -1 || dotposition == -1) {
  console.log("Invalid Email ${email}");
} else {
  console.log("Email is Valid");
}
