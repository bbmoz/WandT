describe('Services', function () {
    describe('.retrieveWeatherData() method', function () {
        it('should get weather data of a city', function () {
            var stubData = {
                city: 'New York',
                state: 'NY'
            };

            Services.retrieveWeatherData(stubData.city, stubData.state, function (error, weatherData) {
                expect(error).toBe(null);
                expect(typeof weatherData.main).toBe('string');
                expect(typeof weatherData.description).toBe('string');
                expect(typeof weatherData.temperature).toBe('number');
                expect(typeof weatherData.humidityPercent).toBe('number');
                expect(typeof weatherData.windSpeed).toBe('number');
                expect(typeof weatherData.cloudPercent).toBe('number');
            });
        });
    });
});