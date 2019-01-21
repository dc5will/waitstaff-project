'use strict';

/* global $ */


// store data in obj
const STORE = {
  basePriceInput: 0,
  taxRateInput: 0,
  tipPercentInput: 0,
  subTotal: 0,
  tip: 0,
  total: 0,
  tipTotal: 0,
  mealCount: 0,
  averageTip: 0
};

// generate HTML string
function generateHTMLstring() {
  // create variables for every displayed output
  const subTotal = STORE.subTotal;
  const tip = STORE.tip;
  const total = STORE.total;
  const tipTotal = STORE.tipTotal;
  const mealCount = STORE.mealCount;
  const averageTip = STORE.averageTip;

  console.log('generateHTMLstring works');

  return `<div class='meal-details left-side'>
    <form name='tipsForm'>
    <h2 class='sectionTitle' id='mealTitle'>Enter the Meal Details</h2>
    <hr>
    <form class='meal-entry-form'>
        <label for='meal-price-entry'>Base Meal Price: $</label>
        <input type='number' id='meal-price-entry' name='meal-base-price' placeholder='$0.00'><br>
        <label for='meal-tax-rate'>Tax Rate: %</label>
        <input type='number' id='meal-tax-rate' name='meal-tax-rate' placeholder='%'><br>
        <label for='meal-tip-percentage'>Tip Percentage: %</label>
        <input type='number' id='meal-tip-percentage' name='meal-tip-percentage' placeholder='%'><br>
        <input type='submit' value='submit' for='submit' class='meal-entry-button js-meal-entry-submit'>
        <input type='button' value='cancel' for='cancel' class='meal-entry-button js-meal-entry-cancel'><br>
    </form>
</div>

<!-- Customer Charges Display-->
<div class='customer-charge-section right-side'>
    <h2 class='sectionTitle' id='customerChargesTitle'>Customer Charges</h2><hr>
        <p class='js-customer-charges-subtotal'>Subtotal: $${subTotal}</p>
        <p class='js-customer-charges-tip'>Tip: ${tip}</p>
        <p class='js-customer-total'>Total: ${total}</p>
</div>

<!-- My Earnings Info -->
<div class='earning-info-section right-side'>
    <h2 class='sectionTitle' id='earningsTItle'>My Earnings Info</h2><hr>
        <p class='js-earnings-info-title'>Tip Total: ${tipTotal}</p>
        <p class='js-earnings-meal-count'>Meal Count: ${mealCount}</p>
        <p class='js-earnings-average-tip'>Average Tip Per Meal: ${averageTip}</p>
</div>`;
}

// render calculator page
function renderCalculatorPage() {
  console.log('renderCalc works');
  $('#js-mainCalcPage').html(generateHTMLstring);
}


// handle meal details
function handleMealDetails() {

}

// take value of base meal price
function baseMealPriceValue() {

}

// take value of tax rate
function taxRatePercentageValue() {

}

// take value of tip percentage
function tipPercentageValue() {

}

// calculate sub total formula
function calculateSubtotal() {

}

// calculate tip amount formula
function calculateTipAmount() {

}

// calculate total amount formula
function calculateTotalAmount() {

}

// submit button should validate values in all input fields are numeric
function submitValidation() {

}

// submit button handling after validation
function handleSubmitValidation() {

}

// cancel button resets data
function resetForm() {

}





function handleCalculator() {
  renderCalculatorPage();
  generateHTMLstring();
}



$(handleCalculator);