import {getHeroById} from './bases/08-import-export';

/*const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {

        const hero = getHeroById(2);
        resolve(hero);
        //reject('No se puedo encontrar el hero');
    }, 2000);
});

promesa.then((hero) => {
    console.log('hero', hero);
})
.catch(err => console.warn(err));*/

const getHeroByIdAsync = (id) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {

            const hero = getHeroById(id);

            if(hero) resolve(hero);
            else reject('No se puedo encontrar el hero');
        }, 2000);
    });

getHeroByIdAsync(5)
    //.then((hero) => console.log('Hero', hero))
    .then(console.log)
    //.catch((err) => console.warn('Error', err));
    .catch(console.warn);