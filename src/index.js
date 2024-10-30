import './css/reset-css.css';
import './css/styles.css';
import './js/autocomplete';
import './js/carousel';
import { getWeather } from './js/weather';
import handleDOM from './js/handleDOM';

require.context('./assets/weather-svgs', false, /\.svg$/);

async function defaultRequest() {
  const weatherData = await getWeather(59.911491, 10.757933); // coordinates of Oslo, Norway.
  handleDOM.applyDataToDOM('Oslo, Norway', weatherData);
}

document.addEventListener('DOMContentLoaded', defaultRequest);
