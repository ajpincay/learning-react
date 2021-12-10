import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Prueba en funciones de heores', () => {
   
    test('debe de retornar un heroe por id ', () => {
        
        const id = 1;
        const hero = getHeroeById(id);

        const heroData = heroes.find(h => h.id == id);

        expect(hero).toEqual(heroData);

    });

    test('debe de retornar undefined si no existe ', () => {
        
        const id = 500;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);

    });

    test('debe de retornar un heroe por owner ', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( (heroe) => heroe.owner === owner )

        expect(heroes).toEqual(heroesData);

    });

    test('debe de retornar 2 elementos en la lista ', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);

    });    
        
});
