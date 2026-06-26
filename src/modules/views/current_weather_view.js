import icons from "../icons.js";

export default class {
  constructor() {
    this.form = document.querySelector("form");

    this.app = document.createElement("div");
    this.app.classList.add("current-weather");

    this.leftDiv = document.createElement("div");
    this.leftDiv.classList.add("left-div");

    this.tempInfo = document.createElement("div");
    this.tempInfo.classList.add("temp-info");

    this.currentIcon = document.createElement("img");
    this.currentIcon.classList.add("current-icon");

    this.currentTemp = document.createElement("div");
    this.currentTemp.classList.add("current-temp");

    this.tempInfo.append(this.currentIcon, this.currentTemp);

    this.leftDiv.append(this.tempInfo);

    this.rightDiv = document.createElement("div");
    this.rightDiv.classList.add("right-div");

    this.currentDescription = document.createElement("div");
    this.currentDescription.classList.add("current-description");

    this.currentDay = document.createElement("div");
    this.currentDay.classList.add("current-day");

    this.rightDiv.append(this.currentDescription, this.currentDay);

    this.app.append(this.leftDiv, this.rightDiv);
    document.body.append(this.app);
  }

  render(currentConditions) {
    this.currentIcon.src = icons[currentConditions.icon];
    this.currentTemp.textContent = currentConditions.temp + "℃";

    this.currentDescription.textContent = currentConditions.conditions;
    this.currentDay.textContent = new Date().toLocaleString("en-us", {
      weekday: "long",
    });
  }

  bindRenderCurrent(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      handler(this.form.location);
    });

    this.form.location.addEventListener("input", () =>
      this.form.location.setCustomValidity(""),
    );
  }
}
