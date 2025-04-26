document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.drop-btn').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.stopPropagation();

      // get the dropdown content associated with the button
      const dropdown = event.currentTarget.nextElementSibling;
      
      // if it's already open, close it
      if (dropdown && dropdown.classList.contains('drop-content')) {
        dropdown.classList.toggle('show');
      }

      // close all other dropdowns (if one is open)
      document.querySelectorAll('.drop-content.show').forEach(function (drop) {
        if (drop !== dropdown) {
          drop.classList.remove('show');
        }
      });
    });
  });

  // close all dropdowns if clicking outside
  window.addEventListener('click', function () {
    document.querySelectorAll('.drop-content.show').forEach(function (drop) {
      drop.classList.remove('show');
    });
  });
});
