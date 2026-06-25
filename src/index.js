import "./index.css";
import fetchData from "./modules/fetch_data.js";
import getDay from "./modules/get_day.js";

function displayWeather() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fetchedData = fetchData(form.location.value);

    getDay(0, fetchedData)
      .then((data) => console.log(data))
      .catch(() => {
        form.location.setCustomValidity("enter a valid location");
        form.location.reportValidity();
      });
  });

  form.location.addEventListener("input", () => {
    form.location.setCustomValidity("");
  });
}

displayWeather();
