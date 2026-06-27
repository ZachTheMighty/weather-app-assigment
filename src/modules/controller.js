import CurrentWeatherModel from "./models/current_weather_model.js";
import CurrentWeatherView from "./views/current_weather_view.js";

import dayModel from "./models/days_model.js";
import dayView from "./views/days_view.js";

import fetchData from "./fetch/fetch_data.js";

import convertTime from "./convert_time.js";
import convertTemp from "./convert_temp.js";
import convertSpeed from "./convert_speed.js";

class Controller {
  constructor(currentModel, currentView, dayModel, dayView) {
    this.currentModel = currentModel;
    this.currentView = currentView;

    this.dayModel = dayModel;
    this.dayView = dayView;

    this.currentConditions;
    this.weekDays;

    this.currentView.bindRender((locationInput) =>
      this.handleRender(locationInput),
    );
    this.currentView.bindToggleUnits((unit) => this.handleToggleUnits(unit));
    this.dayView.bindRenderHours((dayDiv) => this.handleRenderHours(dayDiv));
  }

  async handleRender(locationInput) {
    try {
      const fetchedData = fetchData(locationInput.value);
      this.currentConditions =
        await this.currentModel.getCurrentWeather(fetchedData);
      this.currentView.render(this.currentConditions);

      this.dayView.emptyApp();
      this.dayView.emptyHours();

      this.weekDays = await this.dayModel.getWeekDays(fetchedData);
      this.weekDays.forEach((day) => this.dayView.renderDays(day));
    } catch (error) {
      console.error(error);
      locationInput.setCustomValidity("Enter a valid location");
    }
  }

  handleRenderHours(dayDiv) {
    const day = this.getCorrespondingDayObject(dayDiv);

    this.selectDay(day);

    this.dayView.emptyApp();
    this.weekDays.forEach((day) => this.dayView.renderDays(day));

    this.dayView.emptyHours();
    document.body.append(this.dayView.hoursDiv);

    if (day === this.weekDays[0]) {
      day.hours
        .filter(
          (hour) =>
            hour.datetime >
            convertTime(this.currentView.snapshotTime.textContent),
        )
        .forEach((hour) => this.dayView.renderHours(hour));
    } else {
      day.hours.forEach((hour) => this.dayView.renderHours(hour));
    }
  }

  handleToggleUnits(unit) {
    if (
      unit.classList.contains("fahrenheit") &&
      !unit.classList.contains("selected-temp")
    ) {
      this.currentConditions.temp = convertTemp(
        this.currentConditions.temp,
        "c",
      );

      this.dayView.emptyApp();
      this.weekDays.forEach((day) => {
        day.tempmin = convertTemp(day.tempmin, "c");
        day.tempmax = convertTemp(day.tempmax, "c");
        this.dayView.renderDays(day);
      });

      this.currentConditions.windspeed = convertSpeed(
        this.currentConditions.windspeed,
        "k",
      );

      unit.classList.add("selected-temp");
      unit.previousElementSibling.classList.remove("selected-temp");

      this.currentView.renderToggleUnits(
        this.currentConditions.temp,
        this.currentConditions.windspeed,
        " mph",
      );
    }
    if (
      unit.classList.contains("celsius") &&
      !unit.classList.contains("selected-temp")
    ) {
      this.currentConditions.temp = convertTemp(
        this.currentConditions.temp,
        "f",
      );

      this.dayView.emptyApp();
      this.weekDays.forEach((day) => {
        day.tempmin = convertTemp(day.tempmin, "f");
        day.tempmax = convertTemp(day.tempmax, "f");
        this.dayView.renderDays(day);
      });

      this.currentConditions.windspeed = convertSpeed(
        this.currentConditions.windspeed,
        "m",
      );

      unit.classList.add("selected-temp");
      unit.nextElementSibling.classList.remove("selected-temp");

      this.currentView.renderToggleUnits(
        this.currentConditions.temp,
        this.currentConditions.windspeed,
        " kmph",
      );
    }
  }

  getCorrespondingDayObject(object) {
    let result;
    if (object instanceof Node) {
      this.weekDays.forEach((day) => {
        if (object.getAttribute("data-id") === day.id) result = day;
      });
      return result;
    } else {
      this.dayView.app.childNodes.forEach((dayDiv) => {
        if (dayDiv.getAttribute("data-id") === object.id) result = dayDiv;
      });
      return result;
    }
  }

  selectDay(dayObject) {
    this.weekDays.forEach((day) => {
      day === dayObject ? (day.selected = true) : (day.selected = false);
    });
  }
}

export default new Controller(
  new CurrentWeatherModel(),
  new CurrentWeatherView(),
  new dayModel(),
  new dayView(),
);
