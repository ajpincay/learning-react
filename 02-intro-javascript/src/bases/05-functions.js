
/*const greet = function(name){
    return `Hola, ${ name}`;
}

const greet2 = (name) => {
    return `Hola, ${ name}`;
}*/

const greet3 = (name) => `Hola, ${name}`;
const greet4 = () => 'Hola Mundo';

console.log(greet3('Angel'));
console.log(greet4());

const getUser = () => ({
    uid: '0930551569',
    username: 'ajpincay'
});


console.log(getUser());

//Tarea
const getActiveUser = (name) => ({
    uid: '09305551569',
    username: name
});

const activeUser = getActiveUser('Angel');
console.log(activeUser);