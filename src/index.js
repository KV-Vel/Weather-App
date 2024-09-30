import './css/reset-css.css';
import './css/styles.css';

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
 */

const getWeather = async (city) => {
    const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=6NTV9U8V6WYRPTLLUZNQC3DRN&unitGroup=metric`, { mode: 'cors' });
    return weatherData.json();
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
}

// getWeather('Vladivostok')
//     .then(data => getTodayWeather(data));

getWeather('Vladivostok')
    .then(data => getWeekWeather(data));

    