import { convertDate } from './utils/utils';

const [...dayWrapper] = document.querySelectorAll('.day-wrapper');

export default function applyNext5Days(data) {
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
    dayTemp.textContent = `${days.temp}°C`;
    dayDescription.textContent = days.conditions;
    date.textContent = convertDate(days.datetime);
  });
}
