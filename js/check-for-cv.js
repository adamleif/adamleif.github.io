// Get the object elements and the success message
var pdfObjects = document.getElementsByClassName('pdf');
var successMessage = document.getElementById('successMessage');

// Loop through each pdfObject and attach the event listener
for (var i = 0; i < pdfObjects.length; i++) {
  pdfObjects[i].addEventListener('load', function() {
    // Show the success message if the PDF loads
    successMessage.style.display = 'block';
  });
}