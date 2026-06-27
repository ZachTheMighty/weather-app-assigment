import CurrentWeatherModel from "./models/current_weather_model.js";
import CurrentWeatherView from "./views/current_weather_view.js";

import dayModel from "./models/days_model.js";
import dayView from "./views/days_view.js";

import fetchData from "./fetch/fetch_data.js";

import convertTime from "./convert_time.js";

class Controller {
  constructor(currentModel, currentView, dayModel, dayView) {
    this.currentModel = currentModel;
    this.currentView = currentView;

    this.dayModel = dayModel;
    this.dayView = dayView;

    this.weekDays;

    this.currentView.bindRender((locationInput) =>
      this.handleRender(locationInput),
    );
    this.dayView.bindRenderHours((dayDiv) => this.handleRenderHours(dayDiv));
  }

  async handleRender(locationInput) {
    try {
      const fetchedData = fetchData(locationInput.value);
      const currentConditions =
        await this.currentModel.getCurrentWeather(fetchedData);
      this.currentView.render(currentConditions);

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

    this.dayView.emptyHours();
    document.body.append(this.dayView.hoursDiv);

    day.hours
      .filter(
        (hour) =>
          hour.datetime >
          convertTime(this.currentView.snapshotTime.textContent),
      )
      .forEach((hour) => this.dayView.renderHours(hour));
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
}

export default new Controller(
  new CurrentWeatherModel(),
  new CurrentWeatherView(),
  new dayModel(),
  new dayView(),
);
