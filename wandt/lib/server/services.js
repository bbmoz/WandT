Services = {
    retrieveCoordinates: function (cityData, cb) {
        // https://www.sba.gov/about-sba/sba-performance/sba-data-store/web-service-api/us-city-and-county-web-data-api
        var apiString = 'http://api.sba.gov/geodata/all_links_for_city_of/' +
            cityData.city + '/' +
            cityData.state + '.json';

        try {
            HTTP.call('GET', apiString, function (error, cityInfo) {
                if (!error && cityInfo && cityInfo.data && cityInfo.data[0]) {
                    cityData.latitude = +cityInfo.data[0].primary_latitude;
                    cityData.longitude = +cityInfo.data[0].primary_longitude;
                    cb(null, cityData);
                } else {
                    console.log(cityData);
                    cb({ error: error, apiString: apiString, cityData: cityData });
                }
            });
        } catch (ex) {
            cb({ error: ex, apiString: apiString, cityData: cityData });
        }
    }
};