export default class {
  async getCurrentWeather(fetchedData) {
    return ({ currentConditions } = await fetchedData);
  }
}
