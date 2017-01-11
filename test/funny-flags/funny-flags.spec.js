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

it('tendrá un número de intentos y una puntuación', function() {
    expect(new FunnyFlags('test').score).toBe(0);
    expect(new FunnyFlags('test').tries).toBe(10);
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

it('mostrará una leyenda del resultado', function() {
    var game = new FunnyFlags('test');
    game.countryName ='canada';
    game.randomImage();
    game.checkFlag();
    expect(game.message).toBeDefined();
});

it('finalmente se comprobará con el nombre y devolverá el resultado', function() {
    var game = new FunnyFlags('test');
    game.countryName ='canada';
    game.randomImage();
    game.checkFlag('canada');
    expect(game.result).toBeTruthy();
});

});
