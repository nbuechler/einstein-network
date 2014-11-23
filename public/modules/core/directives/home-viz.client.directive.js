'use strict';

angular.module('core').directive('homeViz', [
	function() {
		return {
			template: '<div id="homeViz"></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
                
                /* jshint ignore:start */
                
                // For todays date;
                Date.prototype.today = function () { 
                    return (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/" + ((this.getDate() < 10)?"0":"") 
                    + this.getDate() +"/" + this.getFullYear();
                }

                // For the time now
                Date.prototype.timeNow = function () {
                     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") 
                     + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
                }
                
                var newDate = new Date();
                var datetime = "LastSync: " + newDate.today() + " @ " + newDate.timeNow();
                
                
                d3.select('#homeViz').append("h1")
                    .text(function(d) { return datetime; });
                /* jshint ignore:end */
                
			}
		};
	}
]);