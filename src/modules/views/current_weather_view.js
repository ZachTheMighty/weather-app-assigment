import icons from "./icons.js";

export default class {
  constructor() {
    this.app = document.createElement("div");
    this.app.classList.add("current-weather");

    this.currentIcon = document.createElement("img");
    this.currentIcon.classList.add("current-icon");

    this.currentTemp = document.createElement("div");
    this.currentTemp.classList.add("current-temp");

    this.app.append(this.currentIcon, this.currentTemp);
    document.body.append(app);
  }
}
