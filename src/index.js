import './css/styles.css';

import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  countryInfo: document.querySelector('.country-info'),
  searchForm: document.querySelector('#search-box'),
};

function fetchCountries() {
  fetch(`https://restcountries.com/v3.1/name/usa`)
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country);
    })
    .catch(error => console.log(error));
}
console.log(fetchCountries());
