(function () {
	function AddRoomCtrl (Room, $uibModalInstance) {
		this.add = function (newRoom) {
			Room.addRoom(newRoom);
			this.cancel();
		};
		
		this.cancel = function () {
			$uibModalInstance.dismiss('cancel');	
		};
	}
	angular
		.module ('blocChat')
		.controller ('AddRoomCtrl', ['Room', '$uibModalInstance', AddRoomCtrl]);
})();
