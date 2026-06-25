export default async function (location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=ZK4WAXABMLFLA7LWGZZBYK5F2`,
  );
  return response.json();
}
