// Fetching the data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags ? country.flags[0] : 'N/A'}`);
      });
});
