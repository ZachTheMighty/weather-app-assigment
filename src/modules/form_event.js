import fetchData from "./fetch/fetch_data.js";
import fetchDays from "./fetch/fetch_days.js";
import displayWeather from "./display/display_weather.js";

export default function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fetchedData = fetchData(form.location.value);

    displayWeather(
      fetchDays(fetchedData).catch(() => {
        form.location.setCustomValidity("enter a valid location");
        form.location.reportValidity();
      }),
      fetchedData,
    );
  });

  form.location.addEventListener("input", () => {
    form.location.setCustomValidity("");
  });
}
