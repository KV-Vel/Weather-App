import './css/reset-css.css';
import './css/styles.css';
import './js/autocomplete';
import './js/carousel';
import { getWeather } from './js/weather';
import handleDOM from './js/handleDOM';

(async function defaultRequest() {
  const weatherData = await getWeather(59.911491, 10.757933); // coordinates of Oslo
  handleDOM.applyDataToDOM('Oslo', weatherData);
})();

// Идея:
/**
 * 3) Появление иконок с погодой должно происходить поочередно 1>2>3>4>5>6...
 * // Ulbi TV rest api
 * // https://www.youtube.com/watch?v=01YKQmia2Jw&list=PLVvjrrRCBy2KvTPJ-HLG4PRqYf-MVJ0h7  -> посмотреть еще другие Notes stick и switchable tabs
 * ADD Icon
 * create loading cycle
 * aniimate svg
 * garbage collector
 * // Сделать все же scroll bar на найденных городах?
 * https://www.youtube.com/watch?v=UTHgr6NLeEw
 * // Исправить autocomplete когда не находит адрес, должно отображать что не нашло
 * На enter выбор первого элемента
 * div .temperature поменять на span
 */

// getWeather('Vladivostok')
//     .then(data => getTodayWeather(data));
