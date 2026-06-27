import icons from "../icons.js";
import convertTime from "../convert_to_am_pm.js";

export default class {
  constructor() {
    this.form = document.querySelector("form");

    this.hoursDiv = document.createElement("div");
    this.hoursDiv.classList.add("hours-div");

    this.app = document.createElement("days");
    this.app.classList.add("days");

    document.body.append(this.app);
  }

  renderDays(day) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day-div");
    dayDiv.setAttribute("data-id", day.id);

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
    tempMax.textContent = Math.floor(day.tempmax) + "°";

    const tempMin = document.createElement("div");
    tempMin.classList.add("temp-min");
    tempMin.textContent = Math.floor(day.tempmin) + "°";

    tempsDiv.append(tempMax, tempMin);

    dayDiv.append(dayName, dayIcon, tempsDiv);

    this.app.append(dayDiv);
  }

  renderHours(hour) {
    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hour-div");

    const timeDiv = document.createElement("div");
    timeDiv.classList.add("time-div");
    timeDiv.textContent = convertTime(hour.datetime, true);

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("temp-div");
    tempDiv.textContent = Math.floor(hour.temp) + "°";

    hourDiv.append(timeDiv, tempDiv);

    this.hoursDiv.append(hourDiv);
  }

  emptyApp() {
    this.app.textContent = "";
  }

  emptyHours() {
    this.hoursDiv.textContent = "";
  }

  bindRenderHours(handler) {
    this.app.addEventListener("click", (event) => {
      const dayDiv = event.target.closest(".day-div");
      if (dayDiv) handler(dayDiv);
    });
  }
}
