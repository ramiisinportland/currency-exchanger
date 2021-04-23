import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './css/styles.css'
import CurrencyService from './services/currency-exchange';

function getElements(response) {
  if (response.meta.code === 200) {
    $("#show-result").text(response)
  } else {
    $('.showErrors').text(`There was an error: ${response.status}`);
    }
}


$(document).ready(function() { //1
  $("#currencySelector").submit(function(event) {
    event.preventDefault();
    console.log("clicked")
    const currencyOne = $("#currencyOne option:selected").val(); 
    console.log(currencyOne)
    const currencyTwo = $("#currencyTwo option:selected").val();
    console.log(currencyTwo)
    const conversionAmount = parseInt($("#amountToConvert").val());
    CurrencyService.getCurrency(currencyOne, currencyTwo, conversionAmount) 
    .then(function(response) { 
      getElements(response); 
    });
  });
});