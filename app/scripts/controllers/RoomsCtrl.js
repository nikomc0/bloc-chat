(function () {
	function RoomsCtrl(Room) {
		this.room = Room.all;
		
		return this.room;
	}
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room', RoomsCtrl]);
})();
