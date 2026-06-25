import fetchData from "./fetch_data.js";
import getDay from "./get_day.js";
import displayWeather from "./display_weather.js";

export default function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fetchedData = fetchData(form.location.value);

    displayWeather(
      getDay(0, fetchedData).catch(() => {
        form.location.setCustomValidity("enter a valid location");
        form.location.reportValidity();
      }),
    );
  });

  form.location.addEventListener("input", () => {
    form.location.setCustomValidity("");
  });
}
