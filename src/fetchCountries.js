const BASE_URL = `https://restcountries.com/v2`;

function fetchCountry(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}`).then(response => {
    if (!response.ok) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }

    return response.json().catch(onFetchError);
  });
}

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

export default { fetchCountry, onFetchError };
