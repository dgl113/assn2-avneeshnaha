// docs/app.js

// Define the doInvoice() function
function doInvoice() {
  // Declare local variables
  var guestName,
    numberOfNights,
    nightlyRate,
    pstRate,
    gstRate,
    subtotal,
    pstAmount,
    gstAmount,
    grandTotal;

  // Prompt for the guest's name
  guestName = prompt("Please enter the guest's name:");

  // Check if the user entered a name
  if (guestName !== null && guestName !== '') {
    // Show the guest's name in the sub-heading
    var guestDetailsHeading = document.getElementById('guestDetailsHeading');
    if (guestDetailsHeading) {
      guestDetailsHeading.textContent = 'Welcome, ' + guestName + '!';
    }

    // Prompt for the number of nights
    numberOfNights = prompt('Please enter the number of nights:');

    // Check if the user entered a valid number of nights
    if (
      numberOfNights !== null &&
      !isNaN(numberOfNights) &&
      numberOfNights !== ''
    ) {
      // Get the nightly rate
      nightlyRate = getNightlyRate();

      // Calculate the subtotal
      subtotal = numberOfNights * nightlyRate;

      // Show the number of nights, nightly rate, and subtotal in the invoice
      alert(
        'Invoice Details:\n' +
          'Number of Nights: ' +
          numberOfNights +
          '\n' +
          'Nightly Rate: $' +
          nightlyRate +
          '\n' +
          'Subtotal: $' +
          subtotal
      );

      // Get the PST and GST rates
      pstRate = getTaxRate('PST');
      gstRate = getTaxRate('GST');

      // Calculate the dollar amount of the PST and GST
      pstAmount = (pstRate / 100) * subtotal;
      gstAmount = (gstRate / 100) * subtotal;

      // Calculate the grand total
      grandTotal = subtotal + pstAmount + gstAmount;

      // Show the PST and GST rates, their dollar amounts, and the grand total in the invoice
      alert(
        'Tax Details:\n' +
          'PST Rate: ' +
          pstRate +
          '%\n' +
          'GST Rate: ' +
          gstRate +
          '%\n' +
          'PST Amount: $' +
          pstAmount.toFixed(2) +
          '\n' +
          'GST Amount: $' +
          gstAmount.toFixed(2) +
          '\n' +
          'Grand Total: $' +
          grandTotal.toFixed(2)
      );

      // You can do further processing with the guestName, numberOfNights, nightlyRate, subtotal,
      // pstRate, gstRate, pstAmount, gstAmount, and grandTotal variables as needed
      // For example, you might use them to generate a detailed invoice or perform other tasks
    } else {
      // Handle the case where the user canceled the numberOfNights prompt or entered an invalid value
      alert('Invalid number of nights. Invoice generation canceled.');
    }
  } else {
    // Handle the case where the user canceled the guestName prompt or didn't enter a name
    alert('No name entered. Invoice generation canceled.');
  }
}

// Function to get the nightly rate (replace this with your actual logic)
function getNightlyRate() {
  return 100; // Replace this with the actual nightly rate
}

// Function to get the tax rate based on the tax type (replace this with your actual logic)
function getTaxRate(taxType) {
  // For demonstration purposes, assuming a fixed tax rate for PST and GST
  if (taxType === 'PST') {
    return 5; // Replace this with the actual PST rate
  } else if (taxType === 'GST') {
    return 10; // Replace this with the actual GST rate
  } else {
    return 0; // Default to 0 for unknown tax types
  }
}

// Call the doInvoice() function when needed
// doInvoice();
