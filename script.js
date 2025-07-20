const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmtion");

form.addEventListener("submit",(e) => {
  e.prebentDefault();
  
  confirmation.style.display = "block";
  
  form.reset();

});