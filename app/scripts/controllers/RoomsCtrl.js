(function () {
	function RoomsCtrl(Room, Message, $uibModal, $cookies) {
		this.rooms = Room.all;
		
		this.open = function () {
			$uibModal.open({
				templateUrl: '/templates/addroom.html',
				controller: 'AddRoomCtrl as addRoom'
			});
		};
		
		this.setRoom = function (room) {
			this.currentRoom = room.$value;
			this.messages = Message.getRoomById(room.$id);
			this.currentUser = $cookies.blocChatCurrentUser;
		};	
	}
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room','Message', '$uibModal', '$cookies', RoomsCtrl]);
})();
