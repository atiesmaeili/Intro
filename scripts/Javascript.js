document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Remove the 'active' class from all links
        navLinks.forEach(function (innerLink) {
          innerLink.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked link
        link.classList.add('active');
      });
    });
  });
  