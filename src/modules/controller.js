import CurrentWeatherModel from "./models/current_weather_model.js";
import CurrentWeatherView from "./views/current_weather_view.js";

import dayModel from "./models/days_model.js";
import dayView from "./views/days_view.js";

import fetchData from "./fetch/fetch_data.js";

class Controller {
  constructor(currentModel, currentView, dayModel, dayView) {
    this.currentModel = currentModel;
    this.currentView = currentView;

    this.dayModel = dayModel;
    this.dayView = dayView;

    this.currentView.bindRender((locationInput) =>
      this.handleRender(locationInput),
    );
  }

  async handleRender(locationInput) {
    try {
      const fetchedData = fetchData(locationInput.value);
      const currentConditions =
        await this.currentModel.getCurrentWeather(fetchedData);
      this.currentView.render(currentConditions);

      (await this.dayModel.getWeekDays(fetchedData)).forEach((day) =>
        this.dayView.render(day),
      );
    } catch (error) {
      console.error(error);
      locationInput.setCustomValidity("Enter a valid location");
    }
  }
}

export default new Controller(
  new CurrentWeatherModel(),
  new CurrentWeatherView(),
  new dayModel(),
  new dayView(),
);
