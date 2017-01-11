var FunnyFlags = function(playerName) {
    this.player = this.player || {};
    this.player.name = playerName;
    this.init();
};

FunnyFlags.prototype.init = function() {
    this.countries = [{
        name: 'canada',
        alpha2Code: 'ca'
    }];
    this.tries = 10;
    this.score = 0;
};

FunnyFlags.prototype.randomImage = function() {
    var imageSrc = 'http://flags.fmcdn.net/data/flags/small/';
    var randomCountry = this.randomCountry();
    this.selectedCountry = randomCountry;
    this.src = [imageSrc, randomCountry.alpha2Code, '.png'].join('');
    this.doHelp(randomCountry.name);
};

FunnyFlags.prototype.randomCountry = function() {
    var indice = Math.floor(Math.random() * this.countries.length);
    var country = this.countries[indice];
    return country;
};

FunnyFlags.prototype.doHelp = function(countryName) {
    var letters = countryName.trim().split('');
    var help = [];
    _.each(letters, function(letter, index) {
        (index < 1) ? help.push(letter): help.push('_');
    });
    this.help = help.join(' ');
};
FunnyFlags.prototype.checkFlag = function(countryName) {
    var result = false;
    var selectedName = this.selectedCountry.name.toLowerCase();
    var ctrName = countryName.toLowerCase();
    if (this.tries > 0) {

        if (ctrName) {
            result = (selectedName === ctrName);
            // result = selectedName.includes(ctrName);
        }
        if (result) {
            this.score++;
        }
        this.tries--;
        this.previous = angular.copy(this.src);
        this.randomImage();
        this.countryName = undefined;
        this.result = result;
        this.message = [ctrName, selectedName].join(' vs ');
    }
};
