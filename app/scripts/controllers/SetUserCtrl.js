(function () {
	function SetUserCtrl ($cookies, $uibModalInstance) {
		this.setUser = function (newUser) {
           	$cookies.blocChatCurrentUser = newUser;
            $uibModalInstance.close($cookies.blocChatCurrentUser);
		};
	}
	angular
		.module ('blocChat')
		.controller ('SetUserCtrl', ['$cookies', '$uibModalInstance', SetUserCtrl]);
})();