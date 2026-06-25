export default async function (day, fetchedData) {
  const data = await fetchedData;
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
