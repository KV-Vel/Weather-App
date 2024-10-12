import {
  autocompleteInput,
  autoCompletePlaceholder,
  hideAutocompleteDropdown,
} from './autocomplete';
import { getWeather } from './weather';
import applyCurrentDay from './applyCurrentDay';
import applyNext5Days from './applyNext5Days';
import applyNext8Hours from './applynext8Hours';

const location = document.querySelector('.location');
const form = document.querySelector('form');

const handleInput = (e) => {
  if (e.target.classList.contains('address-wrapper')) {
    const addressWrapper = e.target;
    addressWrapper.setAttribute('data-selected', 'selected');

    const city = addressWrapper.querySelector('.city').textContent;
    const country = addressWrapper.querySelector('.country').textContent;
    autocompleteInput.value = `${city}, ${country}`;

    hideAutocompleteDropdown();
  }
};

autoCompletePlaceholder.addEventListener('click', handleInput);

function applyDataToDOM(cityName, data) {
  location.textContent = cityName;
  applyCurrentDay(data);
  applyNext5Days(data);
  applyNext8Hours(data);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const selectedCity = document.querySelector('[data-selected = "selected"]');
  const weatherData = await getWeather(
    selectedCity.dataset.lan,
    selectedCity.dataset.lon,
  );

  applyDataToDOM(autocompleteInput.value, weatherData);

  autocompleteInput.value = '';
});
// make tooltip to like ENTER at least 3 letter
// https://htmlacademy.ru/blog/html/adaptive-srcset
