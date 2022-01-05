const confirmation = {
    init: function () {
      
      // Close message
      const modalClose = document.getElementById("modal-close");
      const modalbg = document.querySelector(".bground");
  
      // Listen clicks on button
      modalClose.addEventListener("click", function () {
  
        // Display modal if click
        modalbg.style.display = "none";
      });
  
      // Close message with button
      const modalCloseButton = document.getElementById("modal-close-button");
  
      // Listen clicks on button
      modalCloseButton.addEventListener("click", function () {
  
        // Remove modal if click
        modalbg.style.display = "none";
      });
    }
  };
  
  // Wait DOM before init
  document.addEventListener("DOMContentLoaded", confirmation.init);