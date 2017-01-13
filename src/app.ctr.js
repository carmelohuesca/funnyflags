app.controller('AppController', ['$scope', 'localStorageService', function($scope, localStorageService) {
    $scope.title = 'FunnyFlags';

    $scope.bind = localStorageService.bind($scope, 'players');

    $scope.addPlayer = function() {
        if ($scope.player) {
            $scope.players = ($scope.players) ? $scope.players : [];
            $scope.players.push($scope.player);
            $scope.players = _.uniq($scope.players);
            localStorageService.set('players', $scope.players);
            $scope.bind = localStorageService.bind($scope, 'players');
            $scope.player = undefined;
        }
    };

    $scope.removePlayer = function(index) {
        $scope.players.splice(index, 1);
    };

}]);
