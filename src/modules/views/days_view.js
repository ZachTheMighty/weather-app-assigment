import icons from "../icons.js";

export default class {
  constructor() {
    this.form = document.querySelector("form");

    this.app = document.createElement("days");
    this.app.classList.add("days");

    document.body.append(this.app);
  }

  render(day) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day-div");

    const dayName = document.createElement("div");
    dayName.classList.add("day-name");
    dayName.textContent = new Date(day.datetime).toLocaleString("en-us", {
      weekday: "short",
    });

    const dayIcon = document.createElement("img");
    dayIcon.src = icons[day.icon];
    dayIcon.alt = day.icon + " icon";

    const tempsDiv = document.createElement("div");
    tempsDiv.classList.add("temps-div");

    const tempMax = document.createElement("div");
    tempMax.classList.add("temp-max");
    tempMax.textContent = Math.floor(day.tempmax);

    const tempMin = document.createElement("div");
    tempMin.classList.add("temp-min");
    tempMin.textContent = Math.floor(day.tempmin);

    tempsDiv.append(tempMax, tempMin);

    dayDiv.append(dayName, dayIcon, tempsDiv);

    this.app.append(dayDiv);
  }
}
