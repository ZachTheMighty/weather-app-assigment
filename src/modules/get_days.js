import getHours from "./get_hours.js";

export default async function (fetchedData) {
  const data = await fetchedData;

  let weekDays = [];

  for (let i = 0; i < 8; i++) {
    const day = data.days[i];
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
    } = day;

    weekDays.push({
      timezone: data.timezone,
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
      hours: await getHours(i, fetchedData),
    });
  }

  return weekDays;
}
