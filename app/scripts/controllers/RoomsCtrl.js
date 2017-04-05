(function () {
	function RoomsCtrl(Room, $uibModal) {
		this.rooms = Room.all;
			
		this.open = function () {
			var modalInstance = $uibModal.open({
				animation: false,
				templateUrl: '/templates/add-room.html',
				controller: 'AddRoomCtrl as newRoom'
			});
			
			modalInstance.result.then( function(newName) {
                console.log("OK, working");
                Room.add(newName);
            }, function(reason) {
                console.log("Modal dismissed at " + new Date());
                console.log("Modal dismissed because: " + reason);
            });
		};
		
		return this.rooms;
	}
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room', '$uibModal', RoomsCtrl]);
})();
