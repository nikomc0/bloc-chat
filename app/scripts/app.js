(function () {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$stateProvider
			.state('rooms', {
				url: '/',
				controller: 'RoomsCtrl as rooms',
				templateUrl: '/templates/home.html'
			})
			.state('addRoom', {
				url: '/',
				controller: 'AddRoomCtrl as addRoom',
				templateUrl: '/templates/add-room.html',
			});
	}
	angular
		.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();
