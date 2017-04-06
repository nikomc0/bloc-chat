(function () {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		
		var chatRooms = {};
		
		chatRooms.addRoom = function (room) {
			rooms.$add(room);	
			
			return chatRooms;
		};
		
		return {
			all: rooms
		};
	}
	
	angular	
		.module ('blocChat')
		.factory ('Room', ['$firebaseArray', Room]);
})();
