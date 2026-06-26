import fetchDays from "../fetch/fetch_days.js";

export default class {
  async getWeekDays(fetchedData) {
    const weekDays = fetchDays(fetchedData);
    return weekDays;
  }
}
