import "./index.css";
import fetchData from "./modules/fetch_data.js";
import getDay from "./modules/get_day.js";

function displayWeather() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fetchedData = fetchData(form.country.value);
    getDay(0, fetchedData).then((data) => console.log(data));
  });
}

displayWeather();
