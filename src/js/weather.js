const API_KEY = '6NTV9U8V6WYRPTLLUZNQC3DRN'; // Different moduel in git.ignore ?

const getWeather = async (city) => {
    const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=6NTV9U8V6WYRPTLLUZNQC3DRN`, { mode: 'cors' });
    return weatherData.json();
};

const getTodayWeather = (data) => {
    const TODAY = data.currentConditions;

    console.log(TODAY);
};

getTodayWeather(getWeather('London')) 