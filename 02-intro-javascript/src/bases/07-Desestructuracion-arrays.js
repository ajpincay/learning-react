const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);


const returnArray = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnArray();
console.log(numeros);
console.log(letras);


const usesState = (valor) => {
    return [ valor, ()=> {console.log('Hello World')}];
}

const [nombre, setName] = usesState('Angel');
console.log(nombre);
setName();