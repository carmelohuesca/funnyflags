describe('Juego de FunnyFlags:', function() {

    it('existirá un juego llamado FunnyFlags', function() {
        expect(new FunnyFlags()).toBeDefined();
    });

    it('este juego cargará una lista de paises de http://restcountries.eu/', function() {
        expect(new FunnyFlags('test').countries.length).toBe(1);
    });

    it('cada país tendrá un name y un alpha2Code', function() {
        expect(new FunnyFlags('test').countries[0].name).toBeDefined();
        expect(new FunnyFlags('test').countries[0].alpha2Code).toBeDefined();
    });

    it('del código alpha2Code se obtendrá una imagen aleatoria ', function() {
        var game = new FunnyFlags('test');
        game.randomImage();
        expect(game.src).toEqual('http://flags.fmcdn.net/data/flags/small/ca.png');
    });

    it('El juego mostrará una imagen aleatoria de este servicio: ', function() {
        var game = new FunnyFlags('test');
        game.randomImage();
        expect(game.src).toEqual('http://flags.fmcdn.net/data/flags/small/ca.png');
    });

    it('finalmente se comprobará con el nombre y devolverá el resultado', function() {
        var game = new FunnyFlags('test');
        game.randomImage();
        game.checkFlag('canada');
        expect(game.result).toBeTruthy();
    });

});
