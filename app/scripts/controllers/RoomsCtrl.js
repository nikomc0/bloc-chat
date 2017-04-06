(function () {
	function RoomsCtrl(Room, $uibModal) {
		this.rooms = Room.all;
		
		this.open = function () {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/add-room.html',
				controller: 'RoomsCtrl',
			});
		};
		
		return this.rooms;
	}
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room', '$uibModal', RoomsCtrl]);
})();
