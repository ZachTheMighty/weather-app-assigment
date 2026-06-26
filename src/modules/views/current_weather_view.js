import icons from "../icons.js";

export default class {
  constructor() {
    this.app = document.createElement("div");
    this.app.classList.add("current-weather");

    this.form = document.querySelector("form");

    this.currentIcon = document.createElement("img");
    this.currentIcon.classList.add("current-icon");

    this.currentTemp = document.createElement("div");
    this.currentTemp.classList.add("current-temp");

    this.currentDescription = document.createElement("div");
    this.currentDescription.classList.add("current-description");

    this.app.append(
      this.currentIcon,
      this.currentTemp,
      this.currentDescription,
    );
    document.body.append(this.app);
  }

  render(currentConditions) {
    this.currentIcon.src = icons[currentConditions.icon];
    this.currentTemp.textContent = currentConditions.temp + " ℃";
    this.currentDescription.textContent = currentConditions.conditions;
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
