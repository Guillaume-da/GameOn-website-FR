const validation = {
    init: function () {
      // Form validation
      // Listen clicks on form submit button
      document.getElementById("submitForm").addEventListener("click", function (e) {
  
        // Avoid refresh on form submiting
          e.preventDefault();
  
          // Check First Name field
          const firstName = document.getElementById("first-name-input");
          const firstNameValue = firstName.value;
          const firstNameParent = firstName.parentNode;
          let isValidFirstName = false;
  
          // Check if firstname field was completed with at least 2 letters
          // Add attribute to parent element If the field is empty or have less than 2 letters
          if (firstNameValue.length < 2) {
            
            // Insert error message
            firstNameParent.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus');
  
            // Add data attribute to parent (for red border on input when error)
            firstNameParent.setAttribute('data-error-visible', 'true');
          } else {
            // Text has more than 2 letters
            console.log("Prénom=" + firstNameValue);
  
            // Remove attribute for removing error message and red border
            firstNameParent.removeAttribute('data-error');
            firstNameParent.removeAttribute('data-error-visible');
  
            // Set a variable in true to validate this field
            isValidFirstName = true;
          }
  
          // Last Name field
          const lastName = document.getElementById("last-name-input");
          const lastNameValue = lastName.value;
          const lastNameParent = lastName.parentNode;
          let isValidLastName = false;
  
          // Check if last name field was completed with at least 2 letters
          // Add attribute to parent element If the field is empty or have less than 2 letters
          if (lastNameValue.length < 2) {
            
            // Insert error message
            lastNameParent.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus');
  
            // Add data attribute to parent
            lastNameParent.setAttribute('data-error-visible', 'true');
          } else {
            // Text has more than 2 letters
            console.log("Nom=" + lastNameValue);
  
            // Remove attribute for removing error message and red border
            lastNameParent.removeAttribute('data-error');
            lastNameParent.removeAttribute('data-error-visible');
  
            // Set a variable in true to validate this field
            isValidLastName = true;
          }
  
          // Email field
          const email = document.getElementById("email-input");
          const emailValue = email.value;
          const emailParent = email.parentNode;
  
          // Regex for email validation
          const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let isValidEmail = false;
  
          // Check if email field is empty or if email doesn't pass regex test
          if (emailValue == "" || !emailRegex.test(emailValue)) {
  
            // Add attribute to display error message
            emailParent.setAttribute('data-error', 'Vous devez indiquer un email');
  
            // Add data attribute to parent to display red border
            emailParent.setAttribute('data-error-visible', 'true');
          } else {
  
            // If email is valid
            console.log("Email=" + emailValue);
  
            // Remove attributes for remove error message and red border
            emailParent.removeAttribute('data-error');
            emailParent.removeAttribute('data-error-visible');
  
            // Set a variable in true to validate this field
            isValidEmail = true;
          }
  
          // Birthdate field
          const birthdate = document.getElementById("birthdate-input");
          const birthdateValue = birthdate.value;
          const birthdateParent = birthdate.parentNode;
  
          // Regex for date validation
          const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
          let isValidBirthdate = false;
  
          // Check if birthdate field was completed
          if (birthdateValue == "" || !dateRegex.test(birthdateValue)) {

            // Add attribute to display error message
            birthdateParent.setAttribute('data-error', 'Vous devez entrer une date ainsi: DD/MM/YYYY');

            // Add data attribute to parent
            birthdateParent.setAttribute('data-error-visible', 'true');
          } else {
            console.log("Birthdate=" + birthdateValue);
            birthdateParent.removeAttribute('data-error');
            birthdateParent.removeAttribute('data-error-visible');
  
            // Set a variable in true to validate this field
            isValidBirthdate = true;
          }
  
          // Tournaments field
          const quantity = document.getElementById("quantity-input");
          const quantityValue = quantity.value;
          const quantityParent = quantity.parentNode;
          let isValidQuantity = false;
  
          // Check if tournaments quantity field was completed and check if this is a number
          if (quantityValue == "" || isNaN(quantityValue)) {
            quantityParent.setAttribute('data-error', 'Vous devez indiquer un nombre');
  
            // Add data attribute to parent
            quantityParent.setAttribute('data-error-visible', 'true');
          } else {
            console.log("Tournaments=" + quantityValue);
            quantityParent.removeAttribute('data-error');
            quantityParent.removeAttribute('data-error-visible');
  
            // Set a variable in true to validate this field
            isValidQuantity = true;
          }
  
          // Location checkboxes
          let locationValue = document.getElementsByClassName("location-checkbox-input");
          const locationParent = document.querySelector('.locations');
          let isValidLocation = false;
          
          // Check if a location was selected
          for (let i = 0; i < locationValue.length; i++) {
  
            // if nothing was checked 
            if (!locationValue[i].checked) {
  
              // Add attributes to display error message
              locationParent.setAttribute('data-error', 'Vous devez choisir une option.');
              locationParent.setAttribute('data-error-visible', 'true');
            } else {
  
              // If 1 checkbox was checked
              // Set a variable in true to validate this field
              isValidLocation = true;
            }
          }
  
          // Hide error message
          // If a checkbox was checked
          if (isValidLocation == true) {
  
            // Remove attributes for removing error message
            locationParent.removeAttribute('data-error');
            locationParent.removeAttribute('data-error-visible');
          }
  
          // Terms of use checkbox
          const terms = document.getElementById("checkbox1");
          const termsChecked = terms.checked;
          const termsParent = terms.parentNode;
          let isValidTerms = false;
  
          // Check if checkbox was checked
          // If not checked
          if (termsChecked == false) {
  
            // Add attributes for display error message
            termsParent.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
            termsParent.setAttribute('data-error-visible', 'true');
          } else {
  
            // If checkbox was checked
            console.log("Terms checked=" + termsChecked);
  
            // Remove attribute
            termsParent.removeAttribute('data-error');
  
            // Set a variable in true to validate this field
            isValidTerms = true;
          }
  
          // Check if all datas are correct
          const modalMessageContainer = document.querySelector(".modal-message-container");
          
          // If all fields are validated
          if (isValidFirstName && isValidLastName && isValidEmail && isValidBirthdate && isValidQuantity && isValidLocation && isValidTerms) {
            
            // Show confirmation message
            modalMessageContainer.style.display = "block";
          }
        });
    },
  };
  
  // Wait DOM before init
  document.addEventListener("DOMContentLoaded", validation.init);
  