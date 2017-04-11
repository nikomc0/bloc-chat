(function () {
	function Message($firebaseArray, $cookies) {
		var ref = firebase.database().ref().child('messages');
		var messages = $firebaseArray(ref);
		
		return {
			getRoomById: function (roomId) {
				return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
			},
			send: function (newMessage, roomId) {
				messages.$add ({
					name: $cookies.blocChatCurrentUser,
					content: newMessage,
					roomId: roomId,
					sentAt: Date.now(),
				});
			}
		};
	}
	angular
		.module ('blocChat')
		.factory ('Message', ['$firebaseArray', '$cookies', Message]);
})();
