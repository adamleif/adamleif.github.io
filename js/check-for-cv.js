document.addEventListener('DOMContentLoaded', function () {
  var pdfObjects = document.getElementsByClassName('pdf');
  var successMessage = document.getElementById('successMessage');

  for (var i = 0; i < pdfObjects.length; i++) {
    pdfObjects[i].addEventListener('load', function() {
      // show the success message if the PDF loads
      successMessage.style.display = 'block';
    });
  }
});