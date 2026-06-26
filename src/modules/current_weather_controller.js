import CurrentWeatherModel from "./models/current_weather_model.js";
import CurrentWeatherView from "./views/current_weather_view.js";

import fetchData from "./fetch/fetch_data.js";

class CurrentWeatherController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindRenderCurrent((location) =>
      this.handleRenderCurrent(location),
    );
  }

  async handleRenderCurrent(location) {
    try {
      const fetchedData = fetchData(location);
      const currentConditions = await this.model.getCurrentWeather(fetchedData);

      this.view.render(currentConditions);
    } catch (error) {
      console.log(error);
      console.log(location + " is an invalid location");
    }
  }
}

export default new CurrentWeatherController(
  new CurrentWeatherModel(),
  new CurrentWeatherView(),
);
