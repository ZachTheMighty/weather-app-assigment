import CurrentWeatherModel from "./models/current_weather_model.js";
import CurrentWeatherView from "./views/current_weather_view.js";

import fetchData from "./fetch/fetch_data.js";

class CurrentWeatherController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindRenderCurrent((locationInput) =>
      this.handleRenderCurrent(locationInput),
    );
  }

  async handleRenderCurrent(locationInput) {
    try {
      const fetchedData = fetchData(locationInput.value);
      const currentConditions = await this.model.getCurrentWeather(fetchedData);

      this.view.render(currentConditions);
    } catch (error) {
      console.error(error);
      locationInput.setCustomValidity("Enter a valid location");
    }
  }
}

export default new CurrentWeatherController(
  new CurrentWeatherModel(),
  new CurrentWeatherView(),
);
