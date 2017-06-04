app.controller('barcodeCtrl', function($scope, $ionicModal, $timeout, $stateParams, $http,$cordovaBarcodeScanner) { 
	console.log("Barcode controller called");

    $scope.scanBarcode = function() {
    	console.log("scanBarcode func called");
        $cordovaBarcodeScanner	
        .scan()
        .then(function(imageData) {
            //alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
 
});