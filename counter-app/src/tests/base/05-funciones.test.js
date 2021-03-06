import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas 05-funciones', () => {

    test('Prueba getUser', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('Prueba getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Angel';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: 'Angel'
        });
    });
});
