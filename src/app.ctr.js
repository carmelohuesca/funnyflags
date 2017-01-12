app.controller('AppController', ['$scope', 'CountryService', 'localStorageService', 'GameTDDFactory', function($scope, CountryService, localStorageService, GameTDDFactory) {
    $scope.title = 'FunnyFlags';

    $scope.bind = localStorageService.bind($scope, 'players');

    $scope.addPlayer = function() {
        if ($scope.player) {
            $scope.players = ($scope.players) ? $scope.players : [];
            $scope.players.push($scope.player);
            $scope.players = _.uniq($scope.players);
            $scope.player = undefined;
            localStorageService.set('players', $scope.players);
            $scope.bind = localStorageService.bind($scope, 'players');
        }
    };

    $scope.removePlayer = function(index) {
        $scope.players.splice(index, 1);
    };

}]);
