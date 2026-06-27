export default function (temp, unit) {
  if (unit === "c") return temp * (9 / 5) + 32;
  else if (unit === "f") return (temp - 32) * (5 / 9);
  else throw new Error("invalid temp unit, bitch");
}
