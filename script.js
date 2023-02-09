document.getElementById("jsForm").addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

         const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
         const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  if (fullName.length < 5) {
    document.getElementById("fullName").style.border = "2px solid red";
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("fullName").style.border = "2px solid lightgreen";
    document.getElementById("nameError").style.display = "none";
  }

  if (!email.includes("@")) {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("email").style.border = "2px solid lightgreen";
    document.getElementById("emailError").style.display = "none";
  }

  if (phone === "1234567890" || phone.length !== 10) {
    document.getElementById("phone").style.border = "2px solid red";
    document.getElementById("phoneError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("phone").style.border = "2px solid lightgreen";
    document.getElementById("phoneError").style.display = "none";
  }

  if (password.length < 8 || password === "password" || password === fullName) {
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("passwordError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("password").style.border = "2px solid lightgreen";
    document.getElementById("passwordError").style.display = "none";
  }

  if (password !== confirmPassword || confirmPassword == "") {
    document.getElementById("confirmPassword").style.border = "2px solid red";
    document.getElementById("confirmPasswordError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("confirmPassword").style.border ="2px solid lightgreen";
    document.getElementById("confirmPasswordError").style.display = "none";
  }

  if (isValid) {

    document.getElementById("form").style.border = "2.5px solid lightgreen";

    const form = document.querySelector("#form");
    form.style.transition = "all 0.3s ease-out";
    form.style.transform = "translateY(120px)";
    
    setTimeout(function () {
      alert("Form Submitted Successfully!");
    }, 300);
    
    setTimeout("location.reload(true);", 300);

  }
}
