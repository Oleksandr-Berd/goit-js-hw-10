import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import API from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const refs = {
  countryInfo: document.querySelector('.country-info'),
  searchForm: document.querySelector('#search-box'),
};

function renderCountryCard(country) {
  if (country.length > 1 && country.length < 10) {
    const markUp = country
      .map(el => {
        return `<div class="country_card">
        <img class="flag" src="${el.flags.svg}" alt ="${el.name}" width = "100" height = "80"></>
        <h2 class = "name">Name: ${el.name}</h2>
        </div>`;
      })
      .join('');
    refs.countryInfo.insertAdjacentHTML('afterbegin', markUp);
  }
  if (country.length === 1) {
    const markUp = country
      .map(el => {
        return `<div class="country_card">
        <img class="flag" src="${el.flags.svg}" alt ="${
          el.name
        }" width = "100" height = "80"></>
        <h2 class = "name">Name: ${el.name}</h2>
        <p class= "population">Population: ${el.population}</p>
        <p class = "capital">Capital: ${el.capital}</p>
        <p class = "language">Language: ${Object.values(el.languages[0]).join(
          ', '
        )}</p>
        </div>`;
      })
      .join('');

    refs.countryInfo.insertAdjacentHTML('afterbegin', markUp);
  }
  if (country.length >= 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  evt.preventDefault();
  const countryDraft = evt.target.value;
  const countryName = countryDraft.trim();
  console.log(countryName.length);
  if (countryName.length === 0) {
    refs.countryInfo.innerHTML = '';
    return;
  }
  API.fetchCountry(countryName).then(renderCountryCard).catch(onFetchError);
}

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
