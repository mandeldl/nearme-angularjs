app.controller('MainController', ['$scope', 'places', function($scope) {
	$scope.mapCenter = {
	  lat: 40.741934,
	  lng: -74.004897,
	  zoom: 17
	};
	$scope.geodata = places.success(data);
	$scope.mapMarkers = geodataToMarkers($scope.geodata);
}]);