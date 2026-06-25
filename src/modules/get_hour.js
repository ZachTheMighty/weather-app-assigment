import fetchData from "./fetch_data.js";

async function getHour(day, hour, location) {
  const data = await fetchData(location);
  const hourInfo = data.days[day].hours[hour];
  return {
    datetime: hourInfo.datetime,
    temp: hourInfo.temp,
    feels: hourInfo.feelslike,
    humidity: hourInfo.humidity,
    condition: hourInfo.conditions,
    icon: hourInfo.icon,
  };
}
