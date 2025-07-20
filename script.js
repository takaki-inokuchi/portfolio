const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit",(e) => {
  e.prebentDefault();
  
  confirmation.style.display = "block";
  
  form.reset();

});