import { fetchedData } from "./fetch_data.js";
import get_hours from "./get_hours.js";

export default async function (day) {
  const data = fetchedData;
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
    hours: await get_hours(day),
  };
}
