import { findNext8Hours, convertTime } from './utils/utils';

const [...next8HoursRows] = document.querySelectorAll('.inner-wrapper-row');

export default function applyNext8Hours(data) {
  const next8Hours = findNext8Hours(data);

  next8HoursRows.forEach((row, index) => {
    const rowTime = row.querySelector('.hourly__time');
    const rowTemp = row.querySelector('.hourly__temperature');
    const rowRainChance = row.querySelector('.hourly__rain-probability');

    rowTime.textContent = convertTime(next8Hours[index].datetime);
    rowTemp.textContent = `${next8Hours[index].temp}°C`;
    rowRainChance.textContent = `${next8Hours[index].precipprob}%`;
  });
}
