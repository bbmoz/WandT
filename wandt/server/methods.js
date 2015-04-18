Meteor.methods({
  getMapData: function () {
    var json = Assets.getText('shapefiles/cb_2013_us_state_500k/states.json');
    return JSON.parse(json);
  }
});
