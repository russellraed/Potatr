angular.module('Potatr', ['ngMaterial'])
 .controller('LoginController', function($scope, $http, $mdDialog, $mdToast, $timeout) {
  

  


}).controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
}).controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
}).config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
}).directive('errSrc', function() {
  return {
    	link: function(scope, element, attrs) {
      		element.bind('error', function() {
        		if (attrs.src != attrs.errSrc) {
          			attrs.$set('src', attrs.errSrc);
        		}
      		});
    	}
  	}
}).filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
