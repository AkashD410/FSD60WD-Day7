// Fetching the data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const usDollarCountries = data.filter(country => {
        return country.currencies && Object.values(country.currencies).some(currency => currency.name === 'United States dollar');
      });
      console.log('Countries using US Dollars:', usDollarCountries);
});
