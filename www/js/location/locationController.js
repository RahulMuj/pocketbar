app.controller('locationCtrl', function($scope, $state, $cordovaGeolocation, $compile) {
 /*var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     //var latLng1 = new google.maps.LatLng((position.coords.latitude-0.1), (position.coords.longitude+0.02));
 	//console.log(position.coords.latitude+'  '+ position.coords.longitude);
 	//console.log((position.coords.latitude-0.1)+'  '+ (position.coords.longitude));
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      
  var content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Hard Rock Cafe</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Timing</b>, 11 AM - 4 AM '+
            ' Contact : 9495305 '+
            'Heritage Site.</p><a ng-href="#/app/shop">Go here</a>'+
           
            '</div>'+
            '</div>';
            var compiledContent = $compile(content)($scope)
  var infoWindow = new google.maps.InfoWindow({
      content: compiledContent[0]
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });

  
 
});
 
  }, function(error){
    console.log("Could not get location");
  });*/


});