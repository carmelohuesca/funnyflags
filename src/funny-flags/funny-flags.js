var FunnyFlags = function(playerName) {
    this.player = this.player || {};
    this.player.name = playerName;
    this.imageSrc ='assets/img/flags/small/';
    this.init();
};

FunnyFlags.prototype.countries = [];

FunnyFlags.prototype.init = function() {
    this.populate();
    this.tries = 10;
    this.score = 0;
    this.message = '';
};

FunnyFlags.prototype.getCountries = function(){
    return this.__proto__.countries;
};

FunnyFlags.prototype.setCountries = function(countries){
     this.__proto__.countries = countries;
};

FunnyFlags.prototype.populate = function() {
    this.setCountries([{
        name: 'canada',
        alpha2Code: 'ca'
    }]);
};

FunnyFlags.prototype.launchAllCountriesPromise = function() {
    var success = this.successAllCountries;
    var fail = this.failAllCountries;
    this.promise.then(success.bind(this), fail.bind(this));
};

FunnyFlags.prototype.successAllCountries = function(countries) {
    var countriesMapped = countries.data.map(function(country) {
        return {
            name: country.translations.es,
            alpha2Code: country['alpha2Code'].toLowerCase()
        };
    });
    this.getCountries() = countriesMapped;
    this.randomImage();
};

FunnyFlags.prototype.failAllCountries = function(fail) {
    console.log('no se han encontrado los paises', fail);
};

FunnyFlags.prototype.randomImage = function() {
    var randomCountry = this.randomCountry();
    this.selectedCountry = randomCountry;
    this.doHelp();
    this.src = [this.imageSrc, randomCountry.alpha2Code, '.png'].join('');
};

FunnyFlags.prototype.randomCountry = function() {
    var indice = Math.floor(Math.random() * this.getCountries().length);
    var country = this.getCountries()[indice];
    return country;
};

FunnyFlags.prototype.doHelp = function() {
    var letters = this.selectedCountry.name.trim().split('');
    var help = [];
    _.each(letters, function(letter, index) {
        (index < 1) ? help.push(letter): help.push('_');
    });
    this.help = help.join(' ');
};

FunnyFlags.prototype.checkFlag = function() {
    var result = false;
    var selectedName = new Special().clean(this.selectedCountry.name.toLowerCase());
    var ctrName = new Special().clean(this.countryName.toLowerCase());
    if (this.tries > 0) {

        if (ctrName) {
            result = (selectedName === ctrName);
        }
        if (result) {
            this.score++;
        }
        this.tries--;
        this.previous = JSON.parse(JSON.stringify(this.src));
        this.randomImage();
        this.countryName = undefined;
        this.result = result;
        this.message = [ctrName, selectedName].join(' vs ');
    }
};
