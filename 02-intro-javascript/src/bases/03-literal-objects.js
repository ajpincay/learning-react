const person = {
    name: 'Angel',
    lastname: 'Pincay',
    age: 31,
    address: {
        city: 'Guayaquil',
        zipcode: '090602',
        lat: 12.346,
        lng: 15.234
    }
};

//console.table(person);
console.log(person);

const person2 = {...person};
person2.name = 'Tom';

console.log(person2);