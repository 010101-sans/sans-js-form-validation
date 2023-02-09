// Add a submit event listener to the form
document.getElementById("jsForm").addEventListener("submit", validateForm);

// Function to validate the form input values
function validateForm(event) {

  // Prevent the default form submit behavior
  event.preventDefault();

  // Get the values of the form inputs
         const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
         const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // create a flag variable to check if "all" the input values are valid
  let isValid = true;

  /* 
   * Following if-else-blocks check if the fields are "not" filled according to the specified condition
   *   - if-block   : change the field border color to red, display the error message and turn the flag
   *                  variable "isValid" to false
   *   - else-block : change the field border color to lightgreen, don't show the error.
   */

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

  // Check if all the input fields are simultaneously valid
  if (isValid) {

    // Change the form border to lightgreen
    document.getElementById("form").style.border = "2.5px solid lightgreen";

    // Select the form element
    const form = document.querySelector("#form");
    form.style.transition = "all 0.3s ease-out";  // Apply a transition effect to the form
    form.style.transform = "translateY(120px)";   // Slide the form vertically down
    
    // Display a success alert after the form transition effect is completed
    setTimeout(function () {
      alert("Form Submitted Successfully!");
    }, 300);
    
    // Refresh the page after the success alert is displayed
    setTimeout("location.reload(true);", 300);

  }
}
