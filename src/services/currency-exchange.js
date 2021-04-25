export default class CurrencyService {  
  static getCurrency(currencyFrom, currencyTo, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
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