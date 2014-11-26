'use strict';

// People controller
angular.module('people').controller('PeopleController', ['$scope', '$stateParams', '$location', 'Authentication', 'People',
	function($scope, $stateParams, $location, Authentication, People) {
		
        $scope.authentication = Authentication;

        $scope.greeting = 'Hello there!';
        
        $scope.nodes = {};
        
		// Create new Person
		$scope.create = function() {
            console.log('Started create - peopleCtrl');
			// Create new Person object
			var person = new People ({
                nodeNumber: this.nodeNumber,
                //nodeNumList: this.nodeNumList,
                nodeNumList: [$scope.nodes],
				fname: this.fname,
                mname: this.mname,
                lname: this.lname,
                pob: this.pob,
                dob: this.dob,
                dod: this.dod,
                publishedWorks: this.publishedWorks,
                wellKnownMilestones: this.wellKnownMilestones,
                creativeMovementsFounded: this.creativeMovementsFounded,
                acclaimedProfessions: this.acclaimedProfessions,
                notableWorks: this.notableWorks,
                locationsLived: this.locationsLived,
                x: 0,
                y: 0
			});

            console.log(person.nodeNumList);
            
			// Redirect after save
			person.$save(function(response) {
				$location.path('people/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Person
		$scope.remove = function(person) {
			if ( person ) { 
				person.$remove();

				for (var i in $scope.people) {
					if ($scope.people [i] === person) {
						$scope.people.splice(i, 1);
					}
				}
			} else {
				$scope.person.$remove(function() {
					$location.path('people');
				});
			}
		};

		// Update existing Person
		$scope.update = function() {
            console.log('Started update - peopleCtrl');
			var person = $scope.person;
            
            person.nodeNumList = [$scope.nodes];
            
            console.log(person.nodeNumList);
            
			person.$update(function() {
				$location.path('people/' + person._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of People
		$scope.find = function() {
			$scope.people = People.query();
		};

		// Find existing Person
		$scope.findOne = function() {
			$scope.person = People.get({ 
				personId: $stateParams.personId
			});
		};
        
        
	}
]);