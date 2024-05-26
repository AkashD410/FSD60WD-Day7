// Fetching the data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
    console.log('Total Population:', totalPopulation);
});
