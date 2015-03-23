Template.home.rendered = function () {
    var width, height, path, svg;

    width = 960;
    height = 600;
    path = d3.geo.path().projection(null);
    svg = d3.select('.viz').append('svg')
        .attr('width', width)
        .attr('height', height);

    //d3.json('./../')

    /*
    sampleSvg.append('circle')
        .style('stroke', 'gray')
        .style('fill', 'white')
        .attr('r', 40)
        .attr('cx', 205)
        .attr('cy', 205)
        .on('mouseover', function () {
            d3.select(this).transition().ease('linear')
                .duration(1000)
                .attr('r', 100)
                .style('fill', 'blue')
                .each('end', function () {
                    d3.select(this).transition().ease('linear')
                        .duration(1000)
                        .attr('r', 200)
                        .style('fill', 'pink');
                });
        })
        .on('mouseout', function () {
            d3.select(this).transition().ease('linear')
                .duration(2000)
                .attr('r', 40)
                .style('fill', 'white');
        });
    */
};