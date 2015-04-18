Services = {
  retrieveCoordinates: function (cityData, cb) {
    var apiString;

    // https://www.sba.gov/about-sba/sba-performance/sba-data-store/web-service-api/us-city-and-county-web-data-api
    apiString = 'http://api.sba.gov/geodata/all_links_for_city_of/' +
    cityData.city + '/' +
    cityData.state + '.json';

    try {
      HTTP.call('GET', apiString, function (error, cityInfo) {
        var cityInfoData = cityInfo.data;

        if (!error && cityInfo && cityInfoData && cityInfoData[0]) {
          cityData.latitude = +cityInfoData[0].primary_latitude;
          cityData.longitude = +cityInfoData[0].primary_longitude;

          cb(null, cityData);
        } else {
          cb(new Errors.ServiceException('retrieveCoordinates', error, apiString, cityData));
        }
      });
    } catch (ex) {
      cb(new Errors.ServiceException('retrieveCoordinates', ex, apiString, cityData));
    }
  },

  retrieveWeatherData: function (coordinates, cb) {
    var apiString,
        apiStringParams;

    // http://www.openweathermap.com/current
    apiString = 'http://api.openweathermap.org/data/2.5/weather';
    apiStringParams = {
      params: {
        lat: coordinates.latitude,
        lon: coordinates.longitude
      }
    };

    try {
      HTTP.call('GET', apiString, apiStringParams, function (error, weatherInfo) {
        var weatherData,
        weatherInfoData = weatherInfo.data;

        if (!error && weatherInfo && weatherInfoData) {
          weatherData = {
            main: weatherInfoData.weather[0].main,
            description: weatherInfoData.weather[0].description,
            temperature: weatherInfoData.main.temp,
            humidityPercent: weatherInfoData.main.humidity,
            windSpeed: weatherInfoData.wind.speed,
            cloudPercent: weatherInfoData.clouds.all
          };

          cb(null, weatherData);
        } else {
          cb(new Errors.ServiceException('retrieveWeatherData', error, apiString, apiStringParams));
        }
      });
    } catch (ex) {
      cb(new Errors.ServiceException('retrieveWeatherData', ex, apiString, apiStringParams));
    }
  },

  retrieveTrafficData: function (boundingBox, cb) {
    var apiString,
    apiStringParams;

    // https://msdn.microsoft.com/en-us/library/hh441726.aspx
    apiString = 'http://dev.virtualearth.net/REST/v1/Traffic/Incidents/' +
      [boundingBox.southLatitude, boundingBox.westLongitude, boundingBox.northLatitude, boundingBox.eastLongitude].join() + '/';
    apiStringParams = {
      params: {
        key: Constants.bingMapsKey
      }
    };

    try {
      HTTP.call('GET', apiString, apiStringParams, function (error, trafficInfo) {
        // Accident, Congestion, DisabledVehicle, MassTransit, Miscellaneous, OtherNews,
        // PlannedEvent, RoadHazard, Construction, Alert, Weather
        var incidentTypes = [{type: 'accident', val: 0}, {type: 'congestion', val: 0}, {type: 'disabled vehicle', val: 0},
              {type: 'mass transit', val: 0}, {type: 'miscellaneous', val: 0}, {type: 'other news', val: 0},
              {type: 'planned event', val: 0}, {type: 'road hazard', val: 0}, {type: 'construction', val: 0},
              {type: 'alert', val: 0}, {type: 'weather', val: 0}],
            trafficInfoData = trafficInfo.data,
            trafficResources,
            severityTotal = 0,
            trafficData;

        if (!error && trafficInfo && trafficInfoData && trafficInfoData.resourceSets && trafficInfoData.resourceSets[0]) {
          trafficResources = trafficInfoData.resourceSets[0].resources;

          trafficResources.forEach(function (incident) {
            severityTotal += incident.severity;
            incidentTypes[incident.type - 1].val += 1;
          });

          incidentTypes.sort(function (prev, cur) {
            return cur.val - prev.val;
          });

          trafficData = {
            severityAvg: severityTotal / trafficResources.length,
            incidentTypesOrdered: incidentTypes
          };

          cb(null, trafficData);
        } else {
          cb(new Errors.ServiceException('retrieveTrafficData', error, apiString, apiStringParams));
        }
      });
    } catch (ex) {
      cb(new Errors.ServiceException('retrieveTrafficData', ex, apiString, apiStringParams));
    }
  }
};
