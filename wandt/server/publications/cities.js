Meteor.publish('cities', function getCities() {
  return Cities.find();
});
