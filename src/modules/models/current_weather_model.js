export default class {
  async getCurrentWeather(fetchedData) {
    const { currentConditions } = await fetchedData;
    return currentConditions;
  }
}
