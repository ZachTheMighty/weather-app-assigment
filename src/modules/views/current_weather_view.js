import icons from "../icons.js";
import convertTime from "../convert_to_am_pm.js";

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

    this.extraInfo = document.createElement("div");
    this.extraInfo.classList.add("extra-info");

    this.currentHumidity = document.createElement("div");
    this.currentHumidity.classList.add("current-humidity");

    this.currentWind = document.createElement("div");
    this.currentWind.classList.add("current-wind");

    this.extraInfo.append(this.currentHumidity, this.currentWind);

    this.leftDiv.append(this.tempInfo, this.extraInfo);

    this.rightDiv = document.createElement("div");
    this.rightDiv.classList.add("right-div");

    this.currentDescription = document.createElement("div");
    this.currentDescription.classList.add("current-description");

    this.datetimeDiv = document.createElement("div");
    this.datetimeDiv.classList.add("datetime-div");

    this.currentDay = document.createElement("div");
    this.currentDay.classList.add("current-day");

    this.snapshotTime = document.createElement("div");
    this.snapshotTime.classList.add("snapshot-time");

    this.datetimeDiv.append(this.currentDay, this.snapshotTime);

    this.rightDiv.append(this.datetimeDiv, this.currentDescription);

    this.app.append(this.leftDiv, this.rightDiv);
    document.body.append(this.app);
  }

  render(currentConditions) {
    this.currentIcon.src = icons[currentConditions.icon];
    this.currentIcon.alt = currentConditions.icon + " icon";
    this.currentTemp.textContent = currentConditions.temp + "℃";

    this.currentHumidity.textContent = `Humidity: ${Math.floor(currentConditions.humidity)}%`;
    this.currentWind.textContent = `Wind: ${Math.floor(currentConditions.windspeed)}km/h`;

    this.currentDescription.textContent = currentConditions.conditions;
    this.currentDay.textContent = new Date().toLocaleString("en-us", {
      weekday: "long",
    });
    this.snapshotTime.textContent = convertTime(currentConditions.datetime);
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
