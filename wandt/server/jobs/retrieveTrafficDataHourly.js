(function retrieveTrafficDataHourly() {
  function queryForTrafficData() {
    Cities.find().forEach(function (cityObj) {
      Services.retrieveTrafficData(cityObj.boundingBox, function (error, trafficData) {
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

  Meteor.setInterval(queryForTrafficData, 3000000);
}());
