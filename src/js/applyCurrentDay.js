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

export default function applyCurrentDay(data) {
  const today = data.currentConditions;
  temperature.textContent = `${today.temp}°C`;
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
