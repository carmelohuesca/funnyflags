app.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('fwf')
        .setStorageType('localStorage')
        .setNotify(true, true);
}]);
