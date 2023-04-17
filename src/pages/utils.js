const apiKey = '0edc58817249fed651fd3ed5236d2e02';

export const getWeather = async (city) => {
  try {
    const coordinates = await getCoordinates(city);
    console.log(coordinates);
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.coord.lat}&lon=${coordinates.coord.lon}&cnt=5&APPID=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const weather = await response.json();
    return weather;
  } catch (err) {
    return err.message;
  }
};

export const getCoordinates = async (city) => {
  //get geocoding url
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${apiKey}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const coordinates = await response.json();
    return coordinates;
  } catch (err) {
    return err.message;
  }
};

export function formatDate(date) {
  const dayName = date.toLocaleString('default', { weekday: 'long' });
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  return `${dayName}, ${month} ${day}`;
}
