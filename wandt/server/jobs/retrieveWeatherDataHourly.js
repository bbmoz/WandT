(function retrieveWeatherDataHourly() {
    function queryForWeatherData() {
        Cities.find().forEach(function (cityObj) {
            Services.retrieveWeatherData({ latitude: cityObj.latitude, longitude: cityObj.longitude }, function (error, weatherData) {
                if (!error && weatherData) {
                    Cities.update({_id: cityObj._id}, {
                        $set: {
                            weatherData: weatherData
                        }
                    });
                }
            });
        });
    }

    Meteor.setInterval(queryForWeatherData, 5000);
}());