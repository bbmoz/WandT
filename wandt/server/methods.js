Meteor.methods({
  getMapData: function () {
    var json = Assets.getText('shapefiles/gz_2010_us_050_00_500k/states.json');
    return JSON.parse(json);
  }
});
