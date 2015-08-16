angular.module('Potatr', ['ngMaterial'])
 .controller('PotatrController', function($scope, $http, $mdDialog, $mdToast, $timeout, $mdBottomSheet) {
  
 	$scope.user = null;
 	$scope.contacts = [];

  $scope.fields = [
    { label: "First Name", id: "firstName", variable: "f", share: true },
    { label: "Last Name", id: "lastName", variable: "l", share: true },
    { label: "Email", id: "email", variable: "e", share: true },
    { label: "Contact Number", id: "contactNumber", variable: "c", share: true },
    { label: "Facebook", id: "facebookId", variable: "fb", share: true },
  ];

	//UI Components
	$scope.colors = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#d7ccc8', '#bcaaa4', '#795548', '#d7ccc8', '#bcaaa4', '#8d6e63', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#cfd8dc', '#b0bec5', '#78909c'];

 	$scope.signIn = function(){
 		$scope.user = {
      id: 21,
 			firstName : "Rasal",
 			lastName : "Chanchanas",
      email: "russellraed@gmail.com",
      contactNumber: "131",
      facebookId : "313131"
 		}
 	}

 	$scope.init = function(){
 		$scope.contacts = [
 			{ id: 1, firstName: "Darryl", lastName: "Ong", email: "dong@cambridge.org", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 2, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 3, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 4, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 5, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 6, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 7, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 8, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 9, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 10, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 11, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 12, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 13, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 14, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 15, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 16, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 17, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 18, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 19, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 			{ id: 20, firstName: "Russell", lastName: "Gutierrez", email: "russellraed@gmail.com", contactNumber: "09178199119", facebookId: 1123782705 },
 		];
 		//do not delete below
 		$scope.signIn();
 		$scope.prepareTiles();

 	}

 	$scope.prepareTiles = function(){
 		angular.forEach($scope.contacts, function(contact){
 			contact.color = $scope.randomColor();
 			contact.colspan = $scope.randomSpan();
 			contact.rowspan = $scope.randomSpan();
 		});
 	}

  	$scope.randomColor = function() {
    	return $scope.colors[Math.floor(Math.random() * $scope.colors.length)];
    }

  	$scope.randomSpan = function() {
    	var r = Math.random();
    	if (r < 0.8) {
      		return 1;
    	} else if (r < 0.9) {
      		return 2;
    	} else {
      		return 3;
    	}
  	}

    $scope.initScanning = function(){
        var canvas = document.getElementById("canvas"),
            context = canvas.getContext("2d"),
            video = document.getElementById("video"),
            errBack = function(error) {
              console.log("Video capture error: ", error.code); 
            };

        // Put video listeners into place
  
        MediaStreamTrack.getSources(function(sourceInfos) {
            var audioSource = null;
            var videoSource = null;

            for (var i = 0; i != sourceInfos.length; ++i) {
                var sourceInfo = sourceInfos[i];
                if (sourceInfo.kind === 'audio') {
                    //alert(sourceInfo.id + sourceInfo.label + 'microphone');
                    audioSource = sourceInfo.id;
                } else if (sourceInfo.kind === 'video') {
                    //alert(sourceInfo.id+sourceInfo.label + 'camera');
                    videoSource = sourceInfo.id;
                } else {
                    alert('Some other kind of source: ' + sourceInfo);
                }
            }

            $scope.sourceSelected(audioSource, videoSource, errBack);
        });
    }

    $scope.sourceSelected = function(audioSource, videoSource, errBack) {
        var constraints = {
            video: {
              optional: [{sourceId: videoSource}]
            }
        };
        if(navigator.getUserMedia) { // Standard
          navigator.getUserMedia(constraints, function(stream) {
            video.src = stream;
            video.play();
          }, errBack);
        } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
          navigator.webkitGetUserMedia(constraints, function(stream){
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
          }, errBack);
        }
        else if(navigator.mozGetUserMedia) { // Firefox-prefixed
          navigator.mozGetUserMedia(constraints, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
          }, errBack);
        }
        QCodeDecoder().decodeFromVideo(video, function(er,res){
          if(res.length > 0){
            $("#result").html(res);
            $scope.addContact(eval("(" + res + ")"));

          }
        });
    }

    $scope.$watch('selectedIndex', function(current, old){
      //$scope.selected = tabs[current];
      if($scope.selectedIndex == 1){
        $scope.initScanning();
      }else if($scope.selectedIndex == 2){
        $scope.initSharing();
      }
    });

    $scope.initSharing = function(){
        document.getElementById("qrcode").innerHTML = "";

        var toShare = {};
        angular.forEach($scope.fields, function(field){
          if(field.share){
            if(field.id == "firstName"){
              toShare.f = $scope.user.firstName;
            }else if(field.id == "lastName"){
              toShare.l = $scope.user.lastName;
            }else if(field.id == "email"){
              toShare.e = $scope.user.email;
            }else if(field.id == "contactNumber"){
              toShare.c = $scope.user.contactNumber;
            }else if(field.id == "facebook"){
              toShare.fb = $scope.user.facebookId;
            }
          }
        });

        new QRCode(document.getElementById("qrcode"), JSON.stringify(toShare));
    }

    $scope.getSharingLabel = function(){
      var sharing = [];
      angular.forEach($scope.fields, function(field){
        if(field.share){
          sharing.push(field.label);
        }
      });
      return sharing.join(", ");
    }

    $scope.contactPluralize = {
      0: 'No Potatoes',
      one: '1 Potatoe',
      other: '{} Potatoes'
    }

    $scope.showContact = function(ev, contact){
      $mdDialog.show({
        controller: DialogController,
        template: '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content>'+
           '    <md-list>'+
           '      <md-list-item ng-repeat="item in items">'+
           '       <p>Number {{item}}</p>' +
           '      '+
           '    </md-list-item></md-list>'+
           '  </md-dialog-content>' +
           '  <div class="md-actions">' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </div>' +
           '</md-dialog>',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      }).then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    }

    $scope.addContact = function(result){
      var contact = {
        firstName: result.f,
        lastName: result.l,
        email: result.e,
        contactNumber: result.c,
        facebook: result.fb
      }
      $scope.contacts.push(contact);

      $timeout(function () {
        $scope.selectedIndex = 0;
        $scope.showSimpleToast("Potato added!");
      });
    }

    $scope.toastPosition = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };

    $scope.getToastPosition = function() {
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };

    $scope.showSimpleToast = function(msg) {
      $mdToast.show(
        $mdToast.simple()
        .content(msg)
        .position($scope.getToastPosition())
        .hideDelay(3000)
      );
    };
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

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.closeDialog = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}