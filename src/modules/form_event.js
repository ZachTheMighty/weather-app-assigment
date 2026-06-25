import fetchData from "./fetch/fetch_data.js";
import getDays from "./fetch/get_days.js";
import displayWeather from "./display/display_weather.js";

export default function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fetchedData = fetchData(form.location.value);

    displayWeather(
      getDays(fetchedData).catch(() => {
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
