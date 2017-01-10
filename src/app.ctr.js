app.controller('AppController', ['$scope', 'CountryService', 'GameTDDFactory', function($scope, CountryService, GameTDDFactory) {
    $scope.title = 'Diversión con Banderas';
    
    CountryService.getCountry('spain')
	.then(function(country){
		$scope.spain = country;
	}, function (fail){
		$scope.spain = 'no se encuentra el pais';
	});

    CountryService.getAllCountries()
	.then(function(countries){
		$scope.countries = countries;
	}, function (fail){
		$scope.countries = 'no se encuentran los paises';
	});

}]);
