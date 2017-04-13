(function () {
	function Room($firebaseArray, $location, $anchorScroll) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		
		return {
			all: rooms,
			addRoom: function (newRoom) {
				rooms.$add(newRoom);
			},
			deleteRoom: function (room) {
				rooms.$remove(room);
			},
			gotoBottom: function () {
				$location.hash('bottom');
				$anchorScroll();
			}
		};
	}
	angular	
		.module ('blocChat')
		.factory ('Room', ['$firebaseArray', '$location', '$anchorScroll', Room]);
})();
