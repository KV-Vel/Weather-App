import { getWeather } from './weather';
import {
  autocompleteInput,
  autoCompletePlaceholder,
  hideAutocompleteDropdown,
} from './autocomplete';
import {
  convertCelsiusToFahrenheit,
  convertDate,
  findNext8Hours,
  convertTime,
} from './utils/utils';

const location = document.querySelector('.location');
const form = document.querySelector('form');
const circle = document.querySelector('.circle');
const everyTempValue = [
  document.querySelector('.temperature'),
  ...document.querySelectorAll('.small-temperature'),
  ...document.querySelectorAll('.hourly__temperature'),
];

// eslint-disable-next-line prettier/prettier
const getMode = () =>
  circle.classList.contains('fahrenheit') ? 'us' : 'metric';

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

function applyCurrentDay(data, unitGroup) {
  const temperature = document.querySelector('.temperature');
  const description = document.querySelector('.state-description');
  const [
    humidity,
    windSpeed,
    sunrise,
    sunset,
    cloudCoverage,
    precipitationChance,
    visibility,
  ] = document.querySelectorAll('.small-wrapper > .value');
  const weatherImage = document.querySelector('.weather-image');

  const today = data.currentConditions;

  temperature.textContent = `${unitGroup === 'metric' ? today.temp : convertCelsiusToFahrenheit(today.temp)}°`;
  temperature.setAttribute('data-metric', today.temp);
  // eslint-disable-next-line prettier/prettier
  temperature.setAttribute(
    'data-imperial',
    convertCelsiusToFahrenheit(today.temp),
  );

  description.textContent = today.conditions;
  humidity.textContent = `${today.humidity}%`;
  windSpeed.textContent = `${today.windspeed}kph`;
  sunrise.textContent = today.sunrise;
  sunset.textContent = today.sunset;
  cloudCoverage.textContent = `${today.cloudcover}%`;
  precipitationChance.textContent = `${today.precipprob}%`;
  visibility.textContent = `${today.visibility}km`;
  weatherImage.src = `./assets/weather-svgs/${today.icon}.svg`;
}

function applyNext5Days(data, unitGroup) {
  const [...dayWrapper] = document.querySelectorAll('.day-wrapper');

  dayWrapper.forEach((day, index) => {
    const days = data.days[index + 1];

    const smallImg = day.querySelector(
      '.weekday-img-wrapper > .small-weather-image',
    );
    const dayTemp = day.querySelector(
      '.weekday-information > .small-temperature',
    );
    const dayDescription = day.querySelector(
      '.weekday-information > .small-description',
    );
    const date = day.querySelector('.weekday-information > .date');

    smallImg.src = `./assets/weather-svgs/${days.icon}.svg`;
    dayTemp.textContent = `${unitGroup === 'metric' ? days.temp : convertCelsiusToFahrenheit(days.temp)}°`;
    dayTemp.setAttribute('data-metric', days.temp);
    // eslint-disable-next-line prettier/prettier
    dayTemp.setAttribute(
      'data-imperial',
      convertCelsiusToFahrenheit(days.temp),
    );
    dayDescription.textContent = days.conditions;
    date.textContent = convertDate(days.datetime);
  });
}

function applyNext8Hours(data, unitGroup) {
  const [...next8HoursRows] = document.querySelectorAll('.inner-wrapper-row');
  const next8Hours = findNext8Hours(data);

  next8HoursRows.forEach((row, index) => {
    const rowTime = row.querySelector('.hourly__time');
    const rowTemp = row.querySelector('.hourly__temperature');
    const rowRainChance = row.querySelector('.hourly__rain-probability');

    rowTime.textContent = convertTime(next8Hours[index].datetime);
    rowTemp.textContent = `${unitGroup === 'metric' ? next8Hours[index].temp : convertCelsiusToFahrenheit(next8Hours[index].temp)}°`;
    rowTemp.setAttribute('data-metric', next8Hours[index].temp);
    // eslint-disable-next-line prettier/prettier
    rowTemp.setAttribute(
      'data-imperial',
      convertCelsiusToFahrenheit(next8Hours[index].temp),
    );
    rowRainChance.textContent = `${next8Hours[index].precipprob}%`;
  });
}

function applyDataToDOM(cityName, data) {
  location.textContent = cityName;
  const unitGroup = getMode();
  applyCurrentDay(data, unitGroup);
  applyNext5Days(data, unitGroup);
  applyNext8Hours(data, unitGroup);
}

const toggleMode = () => circle.classList.toggle('fahrenheit');

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

autoCompletePlaceholder.addEventListener('click', handleInput);

circle.addEventListener('click', () => {
  toggleMode();
  if (circle.classList.contains('fahrenheit')) {
    everyTempValue.forEach((value) => {
      value.textContent = `${value.dataset.imperial}°`;
    });
  } else {
    everyTempValue.forEach((value) => {
      value.textContent = `${value.dataset.metric}°`;
    });
  }
});

export default { applyDataToDOM };
// make tooltip to like ENTER at least 3 letter
// Убрать precipitation probability потому что всегда показывает 0 на текущий момент?
// https://htmlacademy.ru/blog/html/adaptive-srcset
