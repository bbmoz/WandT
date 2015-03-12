(function compileCityData() {
    if (Cities.find().count() === 0) {
        Constants.cities.forEach(function (cityAndState) {
            var retrieveCoordinatesAndAssignBoundingBox = async.compose(DataUtils.assignBoundingBox, Services.retrieveCoordinates);

            retrieveCoordinatesAndAssignBoundingBox(cityAndState, function (error, cityData) {
                if (!error) {
                    cityData.weatherData = {};
                    cityData.trafficData = {};
                    Cities.insert(cityData);
                }
            });
        });
    }
}());