'use strict';

// Configuring the People module
angular.module('people').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'People', 'people', 'dropdown', '/people(/create)?');
		Menus.addSubMenuItem('topbar', 'people', 'List People', 'people');
		Menus.addSubMenuItem('topbar', 'people', 'Visualize Network', 'people/visualizePeople');
		Menus.addSubMenuItem('topbar', 'people', 'New Person', 'people/create');
    }
]);