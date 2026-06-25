export default function (currentConditions) {
  const currentWeather = document.createElement("div");
  currentWeather.classList.add("current-weather");

  const currentIcon = document.createElement("div");
  currentIcon.classList.add("icon");
  currentIcon.textContent = currentConditions.icon;

  const currentTemp = document.createElement("div");
  currentTemp.classList.add("current-temp");
  currentTemp.textContent = currentConditions.temp + "C";

  currentWeather.append(currentIcon, currentTemp);

  return currentWeather;
}
