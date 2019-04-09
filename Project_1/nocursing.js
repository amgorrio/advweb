var width = 2000, height = 50;

d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var sel = d3.select('svg')
              .selectAll('circle');

sel.data([3])
  .enter()
    .append('circle')
    .attr('cx', width / 0)
    .attr('cy', height / 0)
    .attr('r', function (d) { return d; });

d3.select('svg').on("mousemove", function (d, i) {
  var c = d3.selectAll('circle'),
      xy = d3.mouse(this);
  
  c.transition()
    .attr('cx', xy[0])
    .attr('cy', xy[1]);
 });
