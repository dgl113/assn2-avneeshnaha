'use strict';
// Define the doInvoice() function
function doInvoice() {
  // Prompt for the guest's name
  var guestName = prompt("Please enter the guest's name:");
  // Check if the user entered a name
  if (guestName !== null && guestName !== '') {
    // Display a message using the entered guestName
    alert('Thank you, ' + guestName + '! Your invoice will be generated.');

    // You can do further processing with the guestName variable as needed
    // For example, you might use it to generate an invoice or perform other tasks
  } else {
    // Handle the case where the user canceled the prompt or didn't enter a name
    alert('No name entered. Invoice generation canceled.');
  }
}

// Call the doInvoice() function when needed
// doInvoice();
// Update the sub-heading with the entered guestName
      var guestNameHeading = document.getElementById('guestNameHeading');
      guestNameHeading.textContent = 'Welcome, ' + guestName + '!';

      // Display a message using the entered guestName
      alert('Thank you, ' + guestName + '! Your invoice will be generated.');
      
      // You can do further processing with the guestName variable as needed
      // For example, you might use it to generate an invoice or perform other tasks
  } else {
      // Handle the case where the user canceled the prompt or didn't enter a name
      alert('No name entered. Invoice generation canceled.');
  }
}

// Call the doInvoice() function when needed
// doInvoice();

