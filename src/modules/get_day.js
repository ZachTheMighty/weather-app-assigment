import get_hours from "./get_hours.js";

export default async function (day, fetchedData) {
  const data = await fetchedData;
  const dayInfo = data.days[day];

  const {
    timezone,
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
  } = dayInfo;

  return {
    timezone,
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
    hours: await get_hours(day, fetchedData),
  };
}
