import icons from "../display/icons.js";

export default class {
  constructor() {
    this.app = document.createElement("div");
    this.app.classList.add("current-weather");

    this.form = document.querySelector("form");

    this.currentIcon = document.createElement("img");
    this.currentIcon.classList.add("current-icon");

    this.currentTemp = document.createElement("div");
    this.currentTemp.classList.add("current-temp");

    this.app.append(this.currentIcon, this.currentTemp);
    document.body.append(this.app);
  }

  render(currentConditions) {
    this.currentIcon.src = icons[currentConditions.icon];
    this.currentTemp.textContent = currentConditions.temp + "&deg;C";
  }

  bindRenderCurrent(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      handler(this.form.location.value);
    });
  }
}
