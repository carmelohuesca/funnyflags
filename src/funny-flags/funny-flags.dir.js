app.directive('funnyFlags', ['CountryService', function(CountryService) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'src/funny-flags/funny-flags.tpl.html',
        link: function(scope, iElement, iAttrs) {
        	// jugador
            scope.player = {
                name: iAttrs.player || 'Jugador'
            };

            


        }
    };
}])
