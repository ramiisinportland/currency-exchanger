import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './css/styles.css'
import CurrencyService from './currencyService.js';

//************* euro ******************
function emiratiDirham(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.AED
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} Emirati Dirham`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}
//************* azerbaijanManats ******************
function azerbaijanManats(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.AZN
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} Azerbaijan Manats`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}
//************* euro ******************
function euro(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.EUR
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} EUR`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}
//************* britishPound ******************
function britishPound(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.GBP
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} British pound`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}
//************* mexicanPeso ******************
function mexicanPeso(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.MXN
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} Mexican Peso`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}


