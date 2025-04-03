// Get the object element and the success message
var pdfObject = document.getElementsByClassName('pdf');
var successMessage = document.getElementById('successMessage');

// Listen for the load event
pdfObject.addEventListener('load', function() {
  // Show the success message if the PDF loads
  successMessage.style.display = 'block';
});