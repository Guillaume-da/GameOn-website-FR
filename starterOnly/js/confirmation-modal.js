const confirmation = {
    init: function () {
      const modalClose = document.getElementById("modal-close");
      const modalbg = document.querySelector(".bground");
  
      // Listen clicks on button
      modalClose.addEventListener("click", function () {
  
        // Hide modal if click
        modalbg.style.display = "none";
      });
  
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