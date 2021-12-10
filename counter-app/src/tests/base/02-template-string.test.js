import '@testing-library/jest-dom';

import {getSaludo} from '../../base/02-template-string';

describe('Tests template strings', () => {

    test('getSaludo debe retornar Hola Angel', () => {

        const nombre = 'Angel';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    });

    test('getSaludo debe retornar Hola Vicky! si no hay argumento en el nombre', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Vicky');

    });
});
