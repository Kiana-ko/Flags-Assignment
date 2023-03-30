// - * - KIANA'S JS FLAG ASSIGNMENT - * - //

let FlagsAPIs = 'https://restcountries.com/v3.1/name/'; // Storing the API inside a variable called FlagsAPIs
let flagSection = document.getElementById('flag-section'); // Selecting flag-section HTML element using .getElementById method

const searchButton = document.getElementById('search-button'); 
function searchForAflag() {
  flagSection.innerHTML = ""; // Responsible for clearing the flag section element
  const searchedCountryName = document.getElementById('searched-keyword').value; 
  fetch(FlagsAPIs + searchedCountryName)
  .then(response => response.json()) // Using .Json method to be able to store the response from fetch as JSON format/JSON object
  .then(data => {
    data.forEach(country => { // Looping through each country objects using .forEach method to get it's info
      const flagUrl = country.flags.svg 
      const countryName = country.name.common 
      const countryPopulation = country.population

      console.log(`Country's Flag URL: ${flagUrl}`)
      console.log(`Country's Name: ${countryName}`)
      console.log(`Country's Population: ${countryPopulation}`)

      //  -- Apending new content to our flagSection element :  -- //
      flagSection.innerHTML += `
        <div>
        <img src= ${flagUrl} > <!-- This means that the image source will be the flag url of searched country! --> 
        <h1> ${countryName} </h1>
        <p> Population: ${countryPopulation} </p>
        </div>
      `

    })
  })
  .catch(error => console.error(error)) // This catches any error that might occour and prints it out
}
