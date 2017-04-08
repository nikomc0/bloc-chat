(function () {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		
		return {
			all: rooms,
			addRoom: function (newRoom) {
				rooms.$add(newRoom);
			}
		};
	}
	angular	
		.module ('blocChat')
		.factory ('Room', ['$firebaseArray', Room]);
})();
