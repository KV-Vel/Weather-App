import './css/reset-css.css';
import './css/styles.css';
import './js/autocomplete';
import './js/carousel';
// Идея:
/**
 * 1) Прогноз будет указан на 1 день, сверху будут кнопки для переключения между днями, или ползунок 1-7 дней
 * 2) Дни недели с погодой будут указаны в ряд
 * 3) Появление иконок с погодой должно происходить поочередно 1>2>3>4>5>6...
 * 4) Нажатие или наведение на иконку должно отображать больше информации о погоде
 * 5) Или через нажатие отображать информацию внизу
 * // Ulbi TV rest api
 * // Color Code fetch
 * // https://www.youtube.com/watch?v=01YKQmia2Jw&list=PLVvjrrRCBy2KvTPJ-HLG4PRqYf-MVJ0h7  -> посмотреть еще другие Notes stick и switchable tabs
 * ADD Icon
 * create loading cycle
 * aniimate svg
 * garbage collector
 * // Сделать все же scroll bar на найденных городах?
 * Посмотреть семантическую верстку у остальных
 */

const getWeather = async (city) => {
  const weatherData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=6NTV9U8V6WYRPTLLUZNQC3DRN&unitGroup=metric`,
    { mode: 'cors' },
  );
  console.log(await weatherData.json());
  //Promise.race [getALLWEATHER, GET Today...]
  //а ОСТАЛЬНОЕ СДЕЛАТЬ С Promise.all?
  // Чтобы спарсить метрич или us систему London?key=6NTV9U8V6WYRPTLLUZNQC3DRN&unitGroup=us
  // Автозаполнение мест:https://apidocs.geoapify.com/samples/autocomplete/geoapify-geocoder-autocomplete/    https://developers.google.com/maps/documentation/javascript/place-autocomplete?hl=ru или https://locationiq.com/
  // https://github.com/visualcrossing/WeatherIcons/blob/main/README.md
  // -> Читать ссылку выше --> И смотреть как называются картинки чтобы потом их исопльзовать у себя. Свои картинки брать отсюда
  // https://www.figma.com/design/23KLTLD5RDONdw2xVDMDKQ/QWeather-Icon-(Community)?node-id=4-402&node-type=frame&t=rz0qVV9iPWoIxAXi-0
  // https://www.youtube.com/watch?v=UTHgr6NLeEw
  // Примеры https://artis-dev.github.io/weather-app/#
  // https://mooniidev.github.io/weather-app/
  // https://alexandrugatea.com/odin/odinweather/
  // Add more interactivity
  //https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
};

const getWeatherValues = (data) => {
  const TODAY = data.currentConditions;
  console.log(TODAY);
  // return {
  //     icon: TODAY.icon,
  //     sunriseTime: TODAY.sunrise,
  //     sunsetTime: TODAY.sunset,
  //     humidity: TODAY.humidity,
  //     temp: TODAY.temp,
  //     date: TODAY.datetime,
  //     conditions: TODAY.conditions
  // }
};

const getWeekWeather = (data) => {
  const nextDays = data.days;
  // return nextDays.splice(0, 7);
  console.log(nextDays.splice(0, 7));
};

// getWeather('Vladivostok')
//     .then(data => getTodayWeather(data));

// getWeather('Saudi Arabia');

//https://apidocs.geoapify.com/samples/autocomplete/geoapify-geocoder-autocomplete/
//https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/#code-samples
//https://jsfiddle.net/Geoapify/t0eg541k/
// Rewrite default css for input
// delete geoapify спиздить стили для дропдауна
//https://jsfiddle.net/gh/get/library/pure/googlemaps/js-samples/tree/master/dist/samples/places-autocomplete/jsfiddle
// https://www.youtube.com/watch?v=l8pe_MSX4Lc
