const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'history', 'sports'],
    address: {
        street: '123 main St',
        city: 'San Francisco',
        state: 'CA',
        zipcode: '94107'
    }
}

console.log(person);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city)
const { firstName, lastName, address: {city}} = person;
console.log(city)
person.email = 'foo@bar.com';
console.log(person);