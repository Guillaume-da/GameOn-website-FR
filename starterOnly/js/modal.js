const modal = {
  init: function () {
    const modalBtn = document.querySelectorAll(".modal-btn");
    const modalbg = document.querySelector(".bground");

    // launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

    // launch modal form
    function launchModal() {
      modalbg.style.display = "block";
    }

    // close modal form
    document.getElementById("close").addEventListener("click", function () {
      modalbg.style.display = "none";
    });
  }
};

// Wait DOM before init
document.addEventListener("DOMContentLoaded", modal.init);


