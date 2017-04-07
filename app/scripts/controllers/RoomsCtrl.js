(function () {
	function RoomsCtrl(Room, $uibModal) {
		this.rooms = Room.all;
		
		this.open = function () {
			$uibModal.open({
				templateUrl: '/templates/addroom.html',
				controller: 'AddRoomCtrl as addRoom'
			});
		};
	}
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room', '$uibModal', RoomsCtrl]);
})();
