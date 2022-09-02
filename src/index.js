import './css/styles.css';

import countryTmpl from './country.hbs';

import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  countryInfo: document.querySelector('.country-info'),
  searchForm: document.querySelector('#search-box'),
};

refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  const form = evt.target.value;

  fetchCountryByName(form)
    .then(renderCountry)
    .catch(error => console.log('error'));
}

function fetchCountryByName(countryName) {
  return fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(
    response => {
      return response.json();
      console.log(response.json());
    }
  );
}

function renderCountry(country) {
  const markup = countryTmpl(country);

  refs.countryInfo.innerHTML = markup;
}
