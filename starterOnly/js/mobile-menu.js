const mobileMenu = {
    init: function () {
      const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
      const mobileMenu = document.querySelector(".mobile-nav");
  
      // Open or close mobile menu on click
      mobileMenuIcon.addEventListener("click", function () {
      mobileMenu.classList.toggle("mobile-menu-visible");
      });

      window.addEventListener('resize', function(event){
        if(window.innerWidth > 1440){
          mobileMenu.classList.remove("mobile-menu-visible");
        }
      })
    }
  }
  
  // Wait DOM before init
  document.addEventListener("DOMContentLoaded", mobileMenu.init);