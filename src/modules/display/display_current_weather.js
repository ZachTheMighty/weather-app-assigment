import icons from "./icons.js";

export default function (currentConditions) {
  const currentWeather = document.createElement("div");
  currentWeather.classList.add("current-weather");

  const currentIcon = document.createElement("img");
  currentIcon.classList.add("current-icon");
  currentIcon.src = icons[currentConditions.icon];

  const currentTemp = document.createElement("div");
  currentTemp.classList.add("current-temp");
  currentTemp.textContent = currentConditions.temp + "C";

  currentWeather.append(currentIcon, currentTemp);

  return currentWeather;
}
