import { fetchedData } from "./fetch_data.js";

export default async function (day) {
  const data = fetchedData;
  const hoursInfo = data.days[day].hours;

  let extractedHours = [];

  hoursInfo.forEach((hour) => {
    const { datetime, temp, feelslike, humidity, conditions, icon } = hour;

    extractedHours.push({
      datetime,
      temp,
      feelslike,
      humidity,
      conditions,
      icon,
    });
  });

  return extractedHours;
}
