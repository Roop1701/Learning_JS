addEventListener("scroll", fscroll);
function fscroll() {
  console.log(document.body.scrollHeight);
  console.log(innerHeight); //Inside Pixel of document type
  console.log(pageYOffset);
  console.log(
    Math.round(pageYOffset / (document.body.scrollHeight - innerHeight)) + "%"
  );
}
