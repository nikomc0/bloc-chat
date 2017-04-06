(function () {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		
//		var addRoom = function (room) {
//			rooms.$add(room);
//		};
		
		return {
			all: rooms,
			addRoom: function (room) {
				rooms.$add(room);
			}
		};
	}
	
	angular	
		.module ('blocChat')
		.factory ('Room', ['$firebaseArray', Room]);
})();
