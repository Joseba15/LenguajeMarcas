
let numeros=[1,2,3,4,5];
console.log(numeros.indexOf(3));
console.log(numeros[1]+numeros[2]);
let cadenas=['Pepes','Juan','Alberto','Ivan'];
console.log(`La palabra ${cadenas[1]} tiene ${cadenas[1].length}`);

//-----------------

let numbers=[1,2,3,4,5,6];
console.log(numbers.length);

let number=4;
console.log(Array.isArray(number));
console.log(Array.isArray(numbers));

console.log(numbers.shift()+' | '+numbers);
console.log(numbers.pop()+' | '+numbers);

console.log(numbers.unshift(6)+' | '+numbers);

console.log(numbers.reverse().join(' '));

numbers.splice(1,2,10,23,54);
console.log(numbers);

numbers.splice(2,0,12,14);
console.log(numbers);













