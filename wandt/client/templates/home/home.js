(function homeTemplate() {
  /* RENDERED */
  Template.home.rendered = function () {
    var width = 960,
        height = 600,
        actualProjection,
        targetedProjection,
        svg;

    actualProjection = d3.geo.path().projection(null);
    targetedProjection = d3.geo.albersUsa().scale(1280).translate([width / 2, height / 2]);
    svg = d3.select('.viz').append('svg')
      .attr('width', width)
      .attr('height', height);

    Meteor.call('getMapData', function (error, mapData) {
      var cities;

      svg.append('path')
        .datum(topojson.mesh(mapData))
        .attr('d', actualProjection);

      cities = Cities.find().fetch();

      svg.selectAll('circle')
        .data(cities)
        .enter().append('circle')
        .attr('r', 5)
        .attr('transform', function (point) {
          return 'translate(' +
            targetedProjection([point.longitude, point.latitude]) +
          ')';
        });
    });
  };
}());
