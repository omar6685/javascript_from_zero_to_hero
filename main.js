/*const addNums = (num1, num2) =>  num1 + num2;


console.log(addNums(1, 2));

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = new Date(age);
}
Person.prototype.getBirthYear = function() {
    return this.age.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}*/

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = new Date(age);
    }
    getBirthYear() {
        return this.age.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}



const person1 = new Person('john', 'John', '4-2-1999');
const person2 = new Person('jane', 'Jane', '4-2-1999');
console.log(person2.getFullName())
console.log(person1)
console.log(person2.getBirthYear())
