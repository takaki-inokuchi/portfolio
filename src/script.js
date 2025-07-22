  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit",(e) => {
    e.preventDefault();
    
    confirmation.style.display = "block";
    
    form.reset();

  });