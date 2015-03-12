DataUtils = {
    assignBoundingBox: function (cityData, cb) {
        cityData.boundingBox = {
            southLatitude: cityData.latitude - 0.5,
            northLatitude: cityData.latitude + 0.5,
            westLongitude: cityData.longitude - 0.5,
            eastLongitude: cityData.longitude + 0.5
        };
        cb(null, cityData);
    }
};