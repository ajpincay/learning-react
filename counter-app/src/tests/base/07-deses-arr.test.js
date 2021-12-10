import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Test 07', () => {
    test('Debe de retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo();

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');

    });
    
});
