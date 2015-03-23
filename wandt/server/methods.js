Meteor.methods({
    getMapData: function () {
        var json = Assets.getText('shapefiles/gz_2010_us_050_00_500k/counties.json');
        return JSON.parse(json);
    }
});