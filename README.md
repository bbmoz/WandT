<h1><b>WandT: Weather and Traffic Live Map</b></h1>
A live weather and traffic heat map of the most populated cities in the United States.

<h3>Main Stack Actors</h3>
- Meteor (full-stack framework) w/ MongoDB (database)
- Bower (client dependency management)
  - D3.js (data visualization library)
- Jasmine (unit and integration testing)

<h3>External API's Used</h3>
- <a href="https://msdn.microsoft.com/en-us/library/ff701713.aspx">Bing Maps REST Services</a> for traffic data (hourly)
- <a href="http://www.openweathermap.com/api">OpenWeatherMap Developers API</a> for weather data (hourly)
- <a href="https://www.sba.gov/about-sba/sba-performance/sba-data-store/web-service-api/us-city-and-county-web-data-api">SBA Web Service API</a> for coordinates

<h3>Data Structure</h3>
```
{
  city: [string],
  latitude: [number],
  longitude: [number],
  state: [string],
  boundingBox: {
    northLatitude: [number],
    southLatitude: [number],
    westLongitude: [number],
    eastLongitude: [number]
  },
  trafficData: {
    severityAvg: [number],
    incidentTypesOrdered: [
      { type: "construction", val: [number] },
      { type: "miscellaneous", val: [number] },
      { type: "other news", val: [number] },
      { type: "mass transit", val: [number] },
      { type: "accident", val: [number] },
      { type: "congestion", val: [number] },
      { type: "planned event", val: [number] },
      { type: "road hazard", val: [number] },
      { type: "disabled vehicle", val: [number] },
      { type: "alert", val: [number] },
      { type: "weather", val: [number] },
    ]
  },
  weatherData: {
    cloudPercent: [number],
    description: [string],
    humidityPercent: [number],
    main: [string],
    temperature: [number],
    windSpeed: [number]
  }
}
```