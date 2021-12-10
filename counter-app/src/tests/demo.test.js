describe('Pruebas en el archivo demo.test.js', () => {
    
    test('deber de ser iguales los string', () => {
    
        //init
        const mensaje = 'Hola Mundo';
    
        //estí
        const mensaje2 = `Hola Mundo`;
    
        expect(mensaje).toBe(mensaje2);
    
    });
});