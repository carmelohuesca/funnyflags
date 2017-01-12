describe('Caracteres especiales', function() {

	it('Existe la instancia', function() {
		expect(new Special()).toBeDefined();
	});

	it('Elimina los carácteres especiales de una cadena', function() {
		var instance = new Special();
		expect(instance.clean('té con leche')).toBe('te con leche');
	});

});

