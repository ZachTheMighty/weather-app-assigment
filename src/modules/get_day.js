import fetchData from "./fetch_data.js";

export default async function (day, location) {
  const data = await fetchData(location);
  const dayInfo = data.days[day];

  const {
    datetime,
    tempmax,
    tempmin,
    temp,
    feelslikemax,
    feelslikemin,
    feelslike,
    humidity,
    conditions,
    description,
    icon,
    hours,
  } = dayInfo;

  return {
    datetime,
    tempmax,
    tempmin,
    temp,
    feelslikemax,
    feelslikemin,
    feelslike,
    humidity,
    conditions,
    description,
    icon,
    hours,
  };
}
