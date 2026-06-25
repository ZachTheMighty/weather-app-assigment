import fetchData from "./fetch_data.js";

export default async function fn(day, hour, location) {
  const data = await fetchData(location);
  const hourInfo = data.days[day].hours[hour];
  const { datetime, temp, feelslike, humidity, conditions, icon } = hourInfo;
  return {
    datetime,
    temp,
    feelslike,
    humidity,
    conditions,
    icon,
  };
}

fn(0, 16, "amman").then((data) => console.log(data));
