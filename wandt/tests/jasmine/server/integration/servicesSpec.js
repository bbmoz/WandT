Jasmine.onTest(function () {
    'use strict';

    describe('Services', function () {
        describe('.retrieveCoordinates() method', function () {
            it('should get the latitude and longitude of a city', function () {
                var expectedCoordinates = {
                    latitude: '29.95',
                    longitude: '-90.07'
                };

                Services.retrieveCoordinates({}, function (error, cityData) {
                    expect(error).toBe(null);
                    expect(cityData).toBeDefined();
                    expect(cityData.latitude).toBe(expectedCoordinates.latitude);
                    expect(cityData.longitude).toBe(expectedCoordinates.longitude);
                });
            });
        });
    });
});