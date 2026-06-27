export default function (temp, unit) {
  if (unit === "c") return Math.floor(Math.floor(temp) * (9 / 5) + 32);
  else if (unit === "f") return Math.floor((Math.floor(temp) - 32) * (5 / 9));
  else throw new Error("invalid temp unit, bitch");
}
