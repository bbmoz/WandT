describe('DataUtils', function () {
    describe('.assignBoundingBox() method', function () {
        it('should assign a bounding box for the latitude and longitude', function () {
            var cityData,
                expectedBoundingBox;

            cityData = {
                latitude: 29.95,
                longitude: -90.07
            };
            expectedBoundingBox = {
                southLatitude: 29.45,
                northLatitude: 30.45,
                westLongitude: -90.57,
                eastLongitude: -89.57
            };

            DataUtils.assignBoundingBox(cityData, function (error, newCityData) {
                var boundingBox = newCityData.boundingBox;

                expect(error).toBe(null);
                expect(newCityData).toBeDefined();
                expect(boundingBox).toBeDefined();
                expect(boundingBox.southLatitude).toBe(expectedBoundingBox.southLatitude);
                expect(boundingBox.northLatitude).toBe(expectedBoundingBox.northLatitude);
                expect(boundingBox.westLongitude).toBe(expectedBoundingBox.westLongitude);
                expect(boundingBox.eastLongitude).toBe(expectedBoundingBox.eastLongitude);
            });
        });
    });
});