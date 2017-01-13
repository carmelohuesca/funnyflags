app.service('CountryService', ['$http', 'COUNTRIES', function($http, COUNTRIES) {

    this.getCountry = function(countryName) {
        return $http.get(COUNTRIES.COUNTRY_BY_NAME + countryName);
    };
    this.getAllCountries = function() {
        return $http.get(COUNTRIES.ALL_COUNTRIES);
    };
}]);
