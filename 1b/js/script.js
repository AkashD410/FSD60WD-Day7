// Fetching the data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);
});
