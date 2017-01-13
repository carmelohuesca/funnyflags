app.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('ls')
        .setStorageType('localStorage')
        .setNotify(true, true);
}]);
