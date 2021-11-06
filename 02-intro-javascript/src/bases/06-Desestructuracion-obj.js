const person = {
    name: 'Tony',
    age: 31,
    key: 'Ironman',
    range: 'Soldier'
};

/*const {name} = person;
const {age} = person;
const {key} = person;

console.log(name);
console.log(key);
console.log(age);*/

const userContext = ({ name, age, key, range = 'Captain' }) =>
({
    keyName: key,
    years: age,
    latlng: {
        lat: 12.36456,
        lng: 34.6777
    }
});

const {keyName, years, latlng} = userContext(person);
const {lat, lng} = latlng;

console.log(keyName, years);
console.log(lat, lng);