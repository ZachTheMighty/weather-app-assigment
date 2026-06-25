import displayCurrentWeather from "./display_current_weather.js";

export default async function (days, fetchedData) {
  const app = document.querySelector("body");

  const weather = document.createElement("div");
  weather.classList.add("weather");

  const { currentConditions } = await fetchedData;

  weather.append(displayCurrentWeather(currentConditions));
  app.append(weather);
}
