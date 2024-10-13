function toggleDropdown() {
    document.getElementById("drop-content").classList.toggle("show");
}
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.drop-btn')) {
    var myDropdown = document.getElementById("drop-content");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }