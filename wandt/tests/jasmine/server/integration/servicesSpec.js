Jasmine.onTest(function () {
  describe('Services', function () {
    describe('.retrieveCoordinates() method', function () {
      it('should get the latitude and longitude of a city', function (done) {
        var stubData = {
          city: 'New York',
          state: 'NY'
        };

        Services.retrieveCoordinates(stubData, function (error, cityData) {
          expect(error).toBe(null);
          expect(cityData).toBeDefined();
          expect(typeof cityData.latitude).toBe('number');
          expect(typeof cityData.longitude).toBe('number');
          done();
        });
      });
    });

    describe('.retrieveWeatherData() method', function () {
      it('should get weather data of a city', function (done) {
        var stubData = {
          latitude: 29.95,
          longitude: -90.07
        };

        Services.retrieveWeatherData(stubData, function (error, weatherData) {
          expect(error).toBe(null);
          expect(typeof weatherData.main).toBe('string');
          expect(typeof weatherData.description).toBe('string');
          expect(typeof weatherData.temperature).toBe('number');
          expect(typeof weatherData.humidityPercent).toBe('number');
          expect(typeof weatherData.windSpeed).toBe('number');
          expect(typeof weatherData.cloudPercent).toBe('number');
          done();
        });
      });
    });

    describe('.retrieveTrafficData() method', function () {
      it('should get traffic data of a city', function (done) {
        var stubData = {
          southLatitude: 29.45,
          northLatitude: 30.45,
          westLongitude: -90.57,
          eastLongitude: -89.57
        };

        Services.retrieveTrafficData(stubData, function (error, trafficData) {
          expect(error).toBe(null);
          expect(typeof trafficData.severityAvg).toBe('number');
          expect(trafficData.incidentTypesOrdered instanceof Array).toBe(true);
          expect(trafficData.incidentTypesOrdered.length > 0).toBe(true);
          done();
        });
      });
    });
  });
});
