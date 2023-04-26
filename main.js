const fruits = ['apples', 'banana', 'cherry', 'cherry']


console.log(fruits);

console.log(fruits[1])

console.log(fruits[2])
fruits[3] = 'banana'
fruits.push('mangos')
fruits.unshift('strawberry');
fruits.pop();
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('cherry'))