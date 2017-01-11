app.directive('funnyFlags', ['CountryService', function(CountryService) {

    var allCountriesPromise = CountryService.getAllCountries();

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'src/funny-flags/funny-flags.tpl.html',
        link: function(scope, iElement, iAttrs) {
            scope.game = new FunnyFlags(iAttrs.player || 'Jugador');
            scope.game.promise = allCountriesPromise;
            scope.game.launchAllCountriesPromise();
        }
    };
}])
