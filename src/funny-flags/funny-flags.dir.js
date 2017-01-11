app.directive('funnyFlags', ['CountryService', function(CountryService) {
    var countries = [];


    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'src/funny-flags/funny-flags.tpl.html',
        link: function(scope, iElement, iAttrs) {
            scope.game = new FunnyFlags(iAttrs.player || 'Jugador');
            CountryService.getAllCountries().then(function(countries) {
                var countries = countries.data.map(function(country) {
                    return {
                        name: country['name'],
                        alpha2Code: country['alpha2Code'].toLowerCase()
                    };
                });
                scope.game.countries = countries;
                scope.game.randomImage();
            }, function(fail) {
                console.log('paises no encontrados!');
            });
            console.log(scope.game);
        }
    };
}])
