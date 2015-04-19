(function homeTemplate() {
  /* UTILITIES */
  function calculatePointRadius(point) {
    var severityAvg = point.trafficData.severityAvg;
    if (isNaN(severityAvg)) {
      return 0.5;
    }
    return severityAvg * severityAvg;
  }

  /* RENDERED */
  Template.home.rendered = function () {
    var width = 960,
        height = 600,
        actualProjection,
        targetedProjection,
        svg,
        cities;

    actualProjection = d3.geo.path().projection(null);
    targetedProjection = d3.geo.albersUsa().scale(1280).translate([width / 2, height / 2]);
    svg = d3.select('.viz').append('svg')
      .attr('width', width)
      .attr('height', height);

    Meteor.call('getMapData', function (error, mapData) {
      svg.append('path')
        .datum(topojson.mesh(mapData))
        .attr('class', 'state-map')
        .attr('d', actualProjection);

      cities = Cities.find({}, {
        fields: { trafficData: 1, longitude: 1, latitude: 1 }
      }).fetch();

      svg.selectAll('circle')
        .data(cities)
        .enter().append('circle')
        .attr('r', calculatePointRadius)
        .attr('transform', function (point) {
          return 'translate(' +
            targetedProjection([point.longitude, point.latitude]) +
          ')';
        });
    });

    Meteor.setInterval(function fetchCities() {
      cities = Cities.find({}, {
        fields: { trafficData: 1 }
      }).fetch();

      svg.selectAll('circle')
        .data(cities)
        .attr('r', calculatePointRadius);
    }, 3000000);
  };
}());
