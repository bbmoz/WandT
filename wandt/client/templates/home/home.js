(function homeTemplate() {
    /* RENDERED */
    Template.home.rendered = function () {
        var width, height, path, svg;

        width = 960;
        height = 600;
        path = d3.geo.path().projection(null);
        svg = d3.select('.viz').append('svg')
            .attr('width', width)
            .attr('height', height);

        Meteor.call('getMapData', function (error, mapData) {
            svg.append('path')
                .datum(topojson.mesh(mapData))
                .attr('d', path);
        });
    };
}());
