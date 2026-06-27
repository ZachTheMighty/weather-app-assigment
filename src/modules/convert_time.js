export default function fn(time, noColon) {
  const splitTime = time.split(":");

  if (!time.includes("AM") && !time.includes("PM")) {
    let [hours] = splitTime;
    let symbol;

    if (+hours > 0 && +hours < 12) symbol = "AM";
    else if (+hours === 0) {
      hours = "12";
      symbol = "AM";
    } else if (+hours === 12) symbol = "PM";
    else {
      symbol = "PM";
      hours = (+hours - 12).toString();
    }

    if (hours[0] === "0") hours = hours.slice(1);

    if (noColon) return `${hours} ${symbol}`;
    return `${hours}:00 ${symbol}`;
  } else {
    let [hours] = splitTime;

    if (time.includes("AM")) {
      hours = hours.padStart(2, "0");

      return `${hours}:00:00`;
    } else {
      hours = (Number(hours) + 12).toString();

      return `${hours}:00:00`;
    }
  }
}
