// Нужно парсить не текущее состояние погода, а текущий день [0]
import {
  autocompleteInput,
  autoCompletePlaceholder,
  hideAutocompleteDropdown,
} from './autocomplete';
import { getWeather } from './weather';

const temperature = document.querySelector('.temperature');
const description = document.querySelector('.state-description');
const location = document.querySelector('.location');
const [
  humidity,
  windSpeed,
  sunrise,
  sunset,
  cloudCoverage,
  precipitationChance,
  visibility,
] = document.querySelectorAll('.small-wrapper > .value');
const hourlyTime = document.querySelectorAll('.hourly__time');
const hourlyTemp = document.querySelectorAll('.hourly__temperature');
const hourlyRainChance = document.querySelectorAll('.hourly__rain-probability');
const form = document.querySelector('form');
const searchWrapper = document.querySelector('.search-wrapper');

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
  const today = data.days[0];
  // Current day
  location.textContent = cityName;
  temperature.textContent = `${today.temp}°C`;
  description.textContent = today.conditions;
  humidity.textContent = `${today.humidity}%`;
  windSpeed.textContent = `${today.windspeed}kph`;
  sunrise.textContent = today.sunrise;
  sunset.textContent = today.sunset;
  cloudCoverage.textContent = `${today.cloudcover}%`;
  precipitationChance.textContent = `${today.precipprob}%`;
  visibility.textContent = `${today.visibility}km`;
  console.log(data);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const selectedCity = document.querySelector('[data-selected = "selected"]');
  const weatherData = await getWeather(
    selectedCity.dataset.lan,
    selectedCity.dataset.lon,
  );

  await applyDataToDOM(autocompleteInput.value, weatherData);

  //Очистить инпут и удалить citySuggestions
});
// make tooltip to like ENTER at least 3 letter
// https://htmlacademy.ru/blog/html/adaptive-srcset
