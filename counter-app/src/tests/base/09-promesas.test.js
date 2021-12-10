import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {

    test('Debe retornar', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });
});
