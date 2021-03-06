![CodeShip Status](https://codeship.com/projects/ba260110-b61d-0132-8efb-127341985930/status?branch=master)
<h1><b>WandT: Weather and Traffic Live Map</b></h1>
<i>Live weather and traffic visualization of the most populated cities in the United States</li>

<h3>Setup Before Meteor</h3>
```bash
>> make setup   # Install NPM TopoJSON and Gulp dependencies.
>> make map     # Download, unzip, and convert the U.S. shapefile into TopoJSON.
```

<h3>Main Stack Actors</h3>
- Meteor (full-stack framework)
- Jasmine (unit and integration testing)
- Bower (client dependency management)
  - D3.js (data visualization library) w/ TopoJSON

<h3>Main External Integrations</h3>
- Codeship (continuous integration) w/ Docker
- Kadira (performance monitoring)

<h3>External API's Used</h3>
- <a href="https://msdn.microsoft.com/en-us/library/ff701713.aspx">Bing Maps REST Services</a> for traffic data (hourly)
- <a href="http://www.openweathermap.com/api">OpenWeatherMap Developers API</a> for weather data (hourly)
- <a href="https://www.sba.gov/about-sba/sba-performance/sba-data-store/web-service-api/us-city-and-county-web-data-api">SBA Web Service API</a> for coordinates

<h3>Compiled City Data Structure</h3>
```javascript
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

<h3>Cities Being Tracked</h3>
```javascript
cities: [
    { city: 'New York', state: 'NY' },
    { city: 'Los Angeles', state: 'CA' },
    { city: 'Chicago', state: 'IL' },
    { city: 'Houston', state: 'TX' },
    { city: 'Philadelphia', state: 'PA' },
    { city: 'Phoenix', state: 'AZ' },
    { city: 'San Antonio', state: 'TX' },
    { city: 'San Diego', state: 'CA' },
    { city: 'Dallas', state: 'TX' },
    { city: 'San Jose', state: 'CA' },
    { city: 'Austin', state: 'TX' },
    { city: 'Indianapolis', state: 'IN' },
    { city: 'Jacksonville', state: 'FL' },
    { city: 'San Francisco', state: 'CA' },
    { city: 'Columbus', state: 'OH' },
    { city: 'Charlotte', state: 'NC' },
    { city: 'Fort Worth', state: 'TX' },
    { city: 'Detroit', state: 'MI' },
    { city: 'El Paso', state: 'TX' },
    { city: 'Memphis', state: 'TN' },
    { city: 'Seattle', state: 'WA' },
    { city: 'Denver', state: 'CO' },
    { city: 'Washington', state: 'MD' }, // exception
    { city: 'Boston', state: 'MA' },
    { city: 'Nashville', state: 'TN' },
    { city: 'Baltimore', state: 'MD' },
    { city: 'Oklahoma City', state: 'OK' },
    { city: 'Louisville', state: 'KY' },
    { city: 'Portland', state: 'OR' },
    { city: 'Las Vegas', state: 'NV' },
    { city: 'Milwaukee', state: 'WI' },
    { city: 'Albuquerque', state: 'NM' },
    { city: 'Fresno', state: 'CA' },
    { city: 'Sacramento', state: 'CA' },
    { city: 'Long Beach', state: 'CA' },
    { city: 'Kansas City', state: 'MO' },
    { city: 'Mesa', state: 'AZ' },
    { city: 'Virginia Beach', state: 'VA' },
    { city: 'Atlanta', state: 'GA' },
    { city: 'Colorado Springs', state: 'CO' },
    { city: 'Omaha', state: 'NE' },
    { city: 'Raleigh', state: 'NC' },
    { city: 'Miami', state: 'FL' },
    { city: 'Oakland', state: 'CA' },
    { city: 'Minneapolis', state: 'MN' },
    { city: 'Tulsa', state: 'OK' },
    { city: 'Cleveland', state: 'OH' },
    { city: 'Wichita', state: 'KS' },
    { city: 'Arlington', state: 'TX' }
]
```

<h3>Latest Screenshot</h3>
<i>April 19, 2015</i>

<img src="http://i57.tinypic.com/10fdu10.jpg">
