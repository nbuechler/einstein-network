'use strict';

angular.module('people').directive('stickForceViz', [
    function() {
		return {
			template: '<div id="stickForceViz"></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
             
                console.log(scope.people);
                
                /* jshint ignore:start */
                
                /*
                 * Inspired by Mike Bostock
                 * http://bl.ocks.org/mbostock/3750558
                 */
                
                d3.select('#stickForceViz').append("h1")
                    .text(function(d) { return "Einstein Network Project"; });
                
                
                var width = 960,
                    height = 500;

                var force = d3.layout.force()
                    .size([width, height])
                    .charge(-400)
                    .linkDistance(40)
                    .on("tick", tick);

                var drag = force.drag()
                    .on("dragstart", dragstart);

                var svg = d3.select("#stickForceViz").append("svg")
                    .attr("width", width)
                    .attr("height", height);

                var link = svg.selectAll(".link"),
                    node = svg.selectAll(".node");

                
                var graph = {
                  "nodes": [
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0},
                    {"x": 0, "y": 0}
                  ],
                  "links": [
                    {"source":  0, "target":  1},
                    {"source":  0, "target":  11},
                    {"source":  0, "target":  12},
                    {"source":  0, "target":  13},
                    {"source":  0, "target":  14},
                    {"source":  1, "target":  11},
                    {"source":  1, "target":  12},
                    {"source":  1, "target":  13},
                    {"source":  1, "target":  14},
                    {"source":  2, "target":  11},
                    {"source":  1, "target":  2},
                    {"source":  2, "target":  0},
                    {"source":  1, "target":  3},
                    {"source":  3, "target":  2},
                    {"source":  3, "target":  4},
                    {"source":  4, "target":  5},
                    {"source":  5, "target":  6},
                    {"source":  5, "target":  7},
                    {"source":  6, "target":  7},
                    {"source":  6, "target":  8},
                    {"source":  7, "target":  8},
                    {"source":  9, "target":  4},
                    {"source":  9, "target": 11},
                    {"source":  9, "target": 10},
                    {"source": 10, "target": 11},
                    {"source": 11, "target": 12},
                    {"source": 12, "target": 10}
                  ]
                }
                
                  force
                      .nodes(graph.nodes)
                      .links(graph.links)
                      .start();

                  link = link.data(graph.links)
                    .enter().append("line")
                      .attr("class", "link");

                  node = node.data(graph.nodes)
                    .enter().append("circle")
                      .attr("class", "node")
                      .attr("r", 12)
                      .on("dblclick", dblclick)
                      .call(drag);
                

                function tick() {
                  link.attr("x1", function(d) { return d.source.x; })
                      .attr("y1", function(d) { return d.source.y; })
                      .attr("x2", function(d) { return d.target.x; })
                      .attr("y2", function(d) { return d.target.y; });

                  node.attr("cx", function(d) { return d.x; })
                      .attr("cy", function(d) { return d.y; });
                }

                function dblclick(d) {
                  d3.select(this).classed("fixed", d.fixed = false).style("fill", "aliceBlue");
                }

                function dragstart(d) {
                  d3.select(this).classed("fixed", d.fixed = true).style("fill", "#f00");
                }
                
                d3.select('#stickForceViz').style("stroke", "#000").style("stroke-width", "1.5px");
                link.style("stroke", "#000").style("stroke-width", "1.5px");
                node.style("stroke", "#000").style("stroke-width", "1.5px").style("cursor", "move").style("fill", "aliceBlue");
                
                /* jshint ignore:end */
                
			}
		};
	}
]);