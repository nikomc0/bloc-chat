(function () {
	function RoomsCtrl(Room, $uibModal) {
		this.rooms = Room.all;
		
		this.open = function () {
			$uibModal.open({
				templateUrl: '/templates/addroom.html',
				controller: 'AddRoomCtrl',
			});
		};
		
		return this.rooms;
	}
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room', '$uibModal', RoomsCtrl]);
})();
