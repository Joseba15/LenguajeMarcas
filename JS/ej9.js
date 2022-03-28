
//let passw=prompt('Introduzca la contrasena, por favor');

/*
while (passw!='hola') {
    passw=prompt('Introduzca la contrasena, por favor');
}
console.log('¡Muy bien, lo ha adivinado!')
*/

/*
do {
    passw=prompt('Introduzca la contrasena, por favor');

} while (passw!='hola');
console.log('Muy bien, lo ha adivinado!');
*/

/*
for (let i = 10; i > 0; i--) {
    console.log(i);
}
*/

let numeritos=[0,1,2,3,4,5];
for (let i = 0; i < numeritos.length; i++) {
    console.log(`i vale ${numeritos[i]} y valor de la posicion del array es de ${numeritos.indexOf(i)}`);
    
}
