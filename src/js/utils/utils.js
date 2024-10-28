function convertDate(date) {
  const arr = date.split('-');
  const [year, month, day] = arr;
  return `${day}.${month}`;
}

function convertTime(date) {
  return date.slice(0, 5);
}

function findNextHoursStart(data) {
  const currenTimeInCity = data.currentConditions.datetime;
  const currentHourInCity = currenTimeInCity.split(':')[0];
  return Number(currentHourInCity);
}

function findNext8Hours(data) {
  const allDayHours = data.days[0].hours;
  // Basically, if now it's 11:00 we are getting next hour from which to start displaying forecast, so it will be 12:00
  const startHour = findNextHoursStart(data);
  const nextAvailableHours = allDayHours.filter(
    (hours, index) => index > startHour,
  );
  // App displaying only next 8 hours forecast
  if (nextAvailableHours.length < 8) {
    const secondDayHours = data.days[1].hours;
    const difference = 8 - nextAvailableHours.length;

    const missingHours = secondDayHours.slice(0, difference);

    return [...nextAvailableHours, ...missingHours];
  }

  return nextAvailableHours.splice(0, 8);
}

// visibility km to miles
function convertVisibility(value) {
  const VISIBILITY_DIFFERENCE = 0.621371;
  return (value * VISIBILITY_DIFFERENCE).toFixed(1);
}

// m/s to mph
function convertWindSpeed(value) {
  const WINDSPEED_DIFFERENCE = 2.23694;
  return (value * WINDSPEED_DIFFERENCE).toFixed(1);
}

function convertCelsiusToFahrenheit(value) {
  return `${(value * 1.8 + 32).toFixed(1)}`;
}
// Как экспортировать весь файл? Скорее всего сделать модулем или IIEF
export {
  convertDate,
  convertTime,
  findNext8Hours,
  convertCelsiusToFahrenheit,
  convertWindSpeed,
  convertVisibility,
};
