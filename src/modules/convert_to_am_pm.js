export default function fn(time) {
  const splitTime = time.split(":");
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
  return `${hours}:00 ${symbol}`;
}
