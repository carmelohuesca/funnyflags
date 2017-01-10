app.directive('country', ['CountryService', function(CountryService) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'src/country.tpl.html',
        link: function(scope, element, attrs) {
            scope.country = {};
            CountryService.getCountry(attrs.name).then(
                function(country) {
                    scope.country = country.data[0];
                },
                function(fail) {
                    scope.country = {};
                    scope.message = 'no se encuentra el pais';
                });
        }
    };
}]);
