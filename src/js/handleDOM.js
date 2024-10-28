import { getWeather } from './weather';
import { autocompleteInput, findBtn } from './autocomplete';
import {
  convertCelsiusToFahrenheit,
  convertDate,
  findNext8Hours,
  convertTime,
  convertVisibility,
  convertWindSpeed,
} from './utils/utils';

const location = document.querySelector('.location');
const form = document.querySelector('form');
const circle = document.querySelector('.circle');
const everyTempValue = [
  document.querySelector('.temperature'),
  ...document.querySelectorAll('.small-temperature'),
  ...document.querySelectorAll('.hourly__temperature'),
];

const toggleMode = () => circle.classList.toggle('fahrenheit');

const getMode = () =>
  circle.classList.contains('fahrenheit') ? 'us' : 'metric';

function displayToday(data, unitGroup) {
  const today = data.currentConditions;

  const temperature = document.querySelector('.temperature');
  const description = document.querySelector('.state-description');
  const weatherImage = document.querySelector('.weather-image');
  const [
    humidity,
    windSpeed,
    sunrise,
    sunset,
    cloudCoverage,
    precipitationChance,
    visibility,
  ] = document.querySelectorAll('.small-wrapper > .value');

  temperature.textContent =
    unitGroup === 'metric'
      ? `${today.temp}°`
      : `${convertCelsiusToFahrenheit(today.temp)}°`;
  temperature.setAttribute('data-metric', today.temp);
  temperature.setAttribute(
    'data-imperial',
    convertCelsiusToFahrenheit(today.temp),
  );

  windSpeed.textContent =
    unitGroup === 'metric'
      ? `${today.windspeed} m/s`
      : `${convertWindSpeed(today.windspeed)} mph`;
  windSpeed.setAttribute('data-metric', `${today.windspeed} m/s`);
  windSpeed.setAttribute(
    'data-imperial',
    `${convertWindSpeed(today.windspeed)} mph`,
  );

  visibility.textContent =
    unitGroup === 'metric'
      ? `${today.visibility} km`
      : `${convertVisibility(today.visibility)} mi`;
  visibility.setAttribute('data-metric', `${today.visibility} km`);
  visibility.setAttribute(
    'data-imperial',
    `${convertVisibility(today.visibility)} mi`,
  );

  description.textContent = today.conditions;
  humidity.textContent = `${today.humidity}%`;
  sunrise.textContent = today.sunrise;
  sunset.textContent = today.sunset;
  cloudCoverage.textContent = `${today.cloudcover}%`;
  precipitationChance.textContent = `${today.precipprob}%`;
  weatherImage.src = `./assets/weather-svgs/${today.icon}.svg`;
}

function displayFiveDays(data, unitGroup) {
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
    dayTemp.setAttribute(
      'data-imperial',
      convertCelsiusToFahrenheit(days.temp),
    );
    dayDescription.textContent = days.conditions;
    date.textContent = convertDate(days.datetime);
  });
}

function displayHourly(data, unitGroup) {
  const [...next8HoursRows] = document.querySelectorAll('.inner-wrapper-row');
  const next8Hours = findNext8Hours(data);

  next8HoursRows.forEach((row, index) => {
    const rowTime = row.querySelector('.hourly__time');
    const rowTemp = row.querySelector('.hourly__temperature');
    const rowRainChance = row.querySelector('.hourly__rain-probability');

    rowTime.textContent = convertTime(next8Hours[index].datetime);
    rowTemp.textContent = `${unitGroup === 'metric' ? next8Hours[index].temp : convertCelsiusToFahrenheit(next8Hours[index].temp)}°`;
    rowTemp.setAttribute('data-metric', next8Hours[index].temp);
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
  displayToday(data, unitGroup);
  displayFiveDays(data, unitGroup);
  displayHourly(data, unitGroup);
}

function displayValuesConversion(valueName) {
  const windSpeedEl = document.querySelector('.wind-speed > .value');
  const visbilityEl = document.querySelector('.visibility > .value');

  everyTempValue.forEach((tempValue) => {
    tempValue.textContent = `${tempValue.dataset[valueName]}°`;
  });

  windSpeedEl.textContent = `${windSpeedEl.dataset[valueName]}`;
  visbilityEl.textContent = `${visbilityEl.dataset[valueName]}`;
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
  findBtn.classList.add('hide');
});

form.addEventListener('keydown', async (e) => {
  if (e.code === 'Enter') e.preventDefault();
});

circle.addEventListener('click', () => {
  toggleMode();

  if (getMode() === 'us') {
    displayValuesConversion('imperial');
  } else {
    displayValuesConversion('metric');
  }
});

export default { applyDataToDOM };
