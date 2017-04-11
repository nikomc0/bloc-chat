(function () {
	function RoomsCtrl(Room, Message, $uibModal, $cookies) {
		this.rooms = Room.all;
		this.currentRoom = null;
		this.newMessage = null;
		
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
			return this.chatRoom = room.$id;
		};	
		
		this.deleteRoom = function (room) {
			Room.deleteRoom(room);
		}
		
		this.sendMessage = function (newMessage) {
			if (newMessage) {
				Message.send(newMessage, this.chatRoom);
				this.newMessage = '';
			}
		};
		
		this.gotoBottom = function () {
			Room.gotoBottom();	
		};
	}
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room','Message', '$uibModal', '$cookies', RoomsCtrl]);
})();
