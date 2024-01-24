'use strict';

// Define the doInvoice() function
function doInvoice() {
  // Prompt for the guest's name
  var guestName = prompt("Please enter the guest's name:");

  // Check if the user entered a name
  if (guestName !== null && guestName !== '') {
    // Prompt for the number of nights
    var numberOfNights = prompt('Please enter the number of nights:');

    // Check if the user entered a valid number of nights
    if (
      numberOfNights !== null &&
      !isNaN(numberOfNights) &&
      numberOfNights !== ''
    ) {
      // Update the sub-heading with the entered guestName and numberOfNights
      var guestDetailsHeading = document.getElementById('guestDetailsHeading');
      if (guestDetailsHeading) {
        guestDetailsHeading.textContent =
          'Welcome, ' + guestName + '! Stay for ' + numberOfNights + ' nights.';
      }

      // Display a message using the entered guestName and numberOfNights
      alert(
        'Thank you, ' +
          guestName +
          '! Your invoice for ' +
          numberOfNights +
          ' nights will be generated.'
      );

      // You can do further processing with the guestName and numberOfNights variables as needed
      // For example, you might use them to calculate the total cost or perform other tasks
    } else {
      // Handle the case where the user canceled the numberOfNights prompt or entered an invalid value
      alert('Invalid number of nights. Invoice generation canceled.');
    }
  } else {
    // Handle the case where the user canceled the guestName prompt or didn't enter a name
    alert('No name entered. Invoice generation canceled.');
  }
}

// Call the doInvoice() function when needed
// doInvoice();
('use strict');

// Define the doInvoice() function
function doInvoice() {
  // Prompt for the guest's name
  var guestName = prompt("Please enter the guest's name:");

  // Check if the user entered a name
  if (guestName !== null && guestName !== '') {
    // Prompt for the number of nights
    var numberOfNights = prompt('Please enter the number of nights:');

    // Check if the user entered a valid number of nights
    if (
      numberOfNights !== null &&
      !isNaN(numberOfNights) &&
      numberOfNights !== ''
    ) {
      // Update the sub-heading with the entered guestName and numberOfNights
      var guestDetailsHeading = document.getElementById('guestDetailsHeading');
      if (guestDetailsHeading) {
        guestDetailsHeading.textContent =
          'Welcome, ' + guestName + '! Stay for ' + numberOfNights + ' nights.';
      }

      // Display a message using the entered guestName and numberOfNights
      alert(
        'Thank you, ' +
          guestName +
          '! Your invoice for ' +
          numberOfNights +
          ' nights will be generated.'
      );

      // You can do further processing with the guestName and numberOfNights variables as needed
      // For example, you might use them to calculate the total cost or perform other tasks
    } else {
      // Handle the case where the user canceled the numberOfNights prompt or entered an invalid value
      alert('Invalid number of nights. Invoice generation canceled.');
    }
  } else {
    // Handle the case where the user canceled the guestName prompt or didn't enter a name
    alert('No name entered. Invoice generation canceled.');
  }
}

// Call the doInvoice() function when needed
// doInvoice();
