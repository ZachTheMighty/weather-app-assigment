export const fetchedData = await fetchData("amman");

async function fetchData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=ZK4WAXABMLFLA7LWGZZBYK5F2`,
    );
    return response.json();
  } catch (error) {
    throw new Error("enter a valid location");
  }
}
