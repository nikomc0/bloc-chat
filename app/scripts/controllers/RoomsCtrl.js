(function () {
	function RoomsCtrl(Room, Message, $uibModal) {
		this.rooms = Room.all;
		this.currentRoom = null;
		
		this.open = function () {
			$uibModal.open({
				templateUrl: '/templates/addroom.html',
				controller: 'AddRoomCtrl as addRoom'
			});
		};
		
		this.setRoom = function (room) {
			this.currentRoom = room.$value;
			this.messages = Message.getRoomById(room.$id);
		};	
	}
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room','Message', '$uibModal', RoomsCtrl]);
})();
