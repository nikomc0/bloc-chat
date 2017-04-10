(function () {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		
		if (!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '/templates/addUser.html',
				controller: 'SetUserCtrl as setUser',
				backdrop: 'static',
				keyboard: false
			});
		}
	}
	angular
		.module ('blocChat')
		.run (['$cookies', '$uibModal', BlocChatCookies]);
})();