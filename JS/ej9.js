/*
let passw=prompt('Introduzca la contrasena, por favor');


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

let numeritos=[6,5,2,1,10,12];
for (let i = 0; i < numeritos.length; i++) {
    console.log(`i vale ${numeritos[i]} y valor de la posicion del array es de ${i}`);
    
}


/*
let nombres=['Marta','Inma','Joaquin','Javier'];
let contador=0;

for (const nombre in nombres) {
    console.log(nombres[nombre])

    
}
*/

/*
let nombres=['Marta','Inma','Joaquin','Javier'];
let contador=0;

for (const nombre in nombres) {
    if (nombres[nombre]== '') {
        continue;   
    }
    
    console.log(nombres[nombre])

    
}
*/



