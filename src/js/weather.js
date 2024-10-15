// eslint-disable-next-line import/prefer-default-export
export const getWeather = async (lan, lon) => {
  // Добавить обработку ошибок + если не найден город
  const weatherData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lan}, ${lon}?key=6NTV9U8V6WYRPTLLUZNQC3DRN&unitGroup=metric`,
    { mode: 'cors' },
  );

  return weatherData.json();
};
