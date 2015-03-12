(function retrieveTrafficDataHourly() {
    function queryForTrafficData() {
        Cities.find().forEach(function (cityObj) {
            Services.retrieveTrafficData(cityObj.boundingBox, function (error, trafficData) {
                console.log(trafficData);
                if (!error && trafficData) {
                    Cities.update({_id: cityObj._id}, {
                        $set: {
                            trafficData: trafficData
                        }
                    });
                }
            });
        });
    }

    Meteor.setInterval(queryForTrafficData, 5000);
}());