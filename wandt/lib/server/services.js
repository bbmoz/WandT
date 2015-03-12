Services = {
    retrieveCoordinates: function (cityData, cb) {
        // https://www.sba.gov/about-sba/sba-performance/sba-data-store/web-service-api/us-city-and-county-web-data-api
        var apiString = 'http://api.sba.gov/geodata/all_links_for_city_of/' +
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
                    cb({ error: error, apiString: apiString, cityData: cityData });
                }
            });
        } catch (ex) {
            cb({ error: ex, apiString: apiString, cityData: cityData });
        }
    },

    retrieveWeatherData: function (city, state, cb) {
        // http://www.openweathermap.com/current
        var apiString = 'http://api.openweathermap.org/data/2.5/weather';
        var apiStringParams = {
            params: {
                q: city + ',' + state
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
                    cb({ error: error, apiString: apiString, params: apiStringParams });
                }
            });
        } catch (ex) {
            cb({ error: ex, apiString: apiString, params: apiStringParams });
        }
    }
};