export default class CurrencyService {  
  static getCurrency(currencyFrom, currencyTo, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/d047175b1816fac751087e8a/latest/USD${currencyFrom}&to=${currencyTo}&amount=${amount}`, { mode: 'cors' })
      .then(function(response) {// Error handling block
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log(response)
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}