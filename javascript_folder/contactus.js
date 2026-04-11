document.addEventListener("DOMContentLoaded", function () {

  let form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

   
    let name = form.querySelector('input[placeholder="Your Name"]').value;
    let email = form.querySelector('input[type="email"]').value;
    let message = form.querySelector("textarea").value;


    name = name.trim();
    email = email.trim();
    message = message.trim();


    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return;
    }


    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email.");
      return;
    }

  
    alert("Message sent successfully!");

 
    form.reset();
  });

});
