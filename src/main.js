import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './css/styles.css'
import CurrencyService from './currencyService.js';

function emiratiDirham(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.AED
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} Emirati Dirham`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}

function azerbaijanManats(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.AZN
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} Azerbaijan Manats`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}

function euro(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.EUR
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} EUR`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}


function britishPound(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.GBP
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} British pound`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}

function mexicanPeso(response, dollarAmount) {
  if (response) {
    let exchangeRate = response.conversion_rates.MXN
    let exchange = (dollarAmount * exchangeRate).toFixed(2);
    $("#showRate").text(`${exchange} Mexican Peso`);
  } else {
    $('#showError').text(`Something Went Wrong: ${response.message}`);
  }
}


