export default function (speed, unit) {
  if (unit === "k") return Math.round(Math.floor(speed) * (5 / 8));
  else if (unit === "m") return Math.round(Math.floor(speed) / (5 / 8));
  else throw new Error("invalid velocity unit bitch");
}
