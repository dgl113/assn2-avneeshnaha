'use strict';
function doInvoice() {
  let guestName;
  let numberOfNights;
  let subTotal;
  let pstAmount;
  let gstAmount;
  let total;
  guestName = prompt("Enter Guest's Name");
  document.getElementById('guestName').innerHTML = guestName;
  numberOfNights = parseInt(prompt('Number of nights'));
  document.getElementById('numberOfNights').innerHTML = numberOfNights;
  document.getElementById('nightlyRate').innerHTML =
    '$' + getNightlyRate().toFixed(2);
  // console.log(typeof(document.getElementById("nightlyRate").innerHTML));
  subTotal = numberOfNights * getNightlyRate();
  subTotal = subTotal.toFixed(2);
  document.getElementById('subTotal').innerHTML = '$' + subTotal;
  document.getElementById('pstRate').innerHTML =
    (getTaxRate('PST') * 100).toFixed(2) + '%';
  //  console.log(getTaxRate('PST'));
  pstAmount = getTaxRate('PST') * subTotal;
  pstAmount = pstAmount.toFixed(2);
  document.getElementById('pstAmount').innerHTML = '$' + pstAmount;
  document.getElementById('gstRate').innerHTML =
    (getTaxRate('GST') * 100).toFixed(2) + '%';
  gstAmount = getTaxRate('GST') * subTotal;
  gstAmount = gstAmount.toFixed(2);
  document.getElementById('gstAmount').innerHTML = '$' + gstAmount;
  total = parseFloat(subTotal) + parseFloat(pstAmount) + parseFloat(gstAmount);
  document.getElementById('total').innerHTML = '$' + total;
}
