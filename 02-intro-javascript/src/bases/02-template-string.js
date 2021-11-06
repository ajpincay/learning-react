const name = 'Angel';
const lastName = 'Pincay';

//const fullName = name + ' ' + lastName;
const fullName = `
${name}
${lastName}
${ 1 + 1}`;

console.log(fullName);


function getGreeting(name, lastName) {
    return `Hola ${name} ${lastName}`;
}

console.log(`This is a greeting: ${ getGreeting(name, lastName)}`);