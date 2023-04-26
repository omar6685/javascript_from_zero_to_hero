const x = 6;
const y = 11;

if(x > 5 && y > 10) {
    console.log('x > 10 and y > 10');
} else if(x>10) {
    console.log('x is greater than 10')
}
else {
    console.log('x is less 10')
}

const r = 10;
const color = r > 10? 'red' : 'green';
console.log(color);

switch(color) {
    case'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green');
        break;
    default:
        console.log('color is not red or green');
}