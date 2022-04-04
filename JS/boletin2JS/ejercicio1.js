/*
let nombre=prompt('Introduce tu nombre');
let edad=Number(prompt('Introduce tu edad'));
console.log(`Hola ${nombre} , tienes ${edad} y el ano que viene tendras ${edad+1}`); 
*/

/*
let ask=prompt('Introduce la figura que desee');
if (ask=='triangulo') {
    let base=prompt('Introduce la base');
    let altura=prompt('Introduce la altura');
    alert('La base del '+ask+' es de '+(base*altura)/2)
}else if(ask='rectangulo'){
    let base=prompt('Introduce la base');
    let altura=prompt('Introduce la altura');
    alert('La base del '+ask+' es de '+base*altura)
}else if(ask='circulo'){
    let radio=prompt('Introduce el radio');
    alert('La base del '+ask+' es de '+Math.PI*Math.pow(radio,2)

}
*/

/*
let numeros=prompt('Introduce cuantos numeros quieres');
for (let i = 0;i <=numeros; i++) {
    if (i%2==0) {
        console.log(i+" Es par");
    }else{
        console.log(i+" Es impar");
    }
    
}
*/

/*
let num=prompt('Introduce un numero mayor que 1');
while(num<1){
    num=prompt('Introduce un numero mayor que 1');
}

for (let i = 0; i <= num; i++) {
    if (num%i==0) {
        console.log("el numero no es primo");
    }
}
*/

/*
let num=Number(prompt('Introduce un numero: '));
let sum=num;
let contadorNum=1;

while (sum<50) {
    let num=Number(prompt('Introduce un numero: '));
    sum+=num;
    contadorNum++;
}
alert("La suma de todos los numeros introducidos es de : "+sum+" y se han introducido " +contadorNum+ " numeros");
*/

let aws="s";
let num=Math.round(Math.random()*10+1);
alert("Su carta es un " +num);
sumaValorCartas=num;
while (aws=="s" && sumaValorCartas<=21) {
    aws=prompt("Quieres introducir cartas? s/n");
    num=Math.round(Math.random()*10+1);
    sumaValorCartas+=num;
    alert("Su carta es un " +num);
    alert("Lleva una suma de : "+sumaValorCartas);
}
if (sumaValorCartas>21) {
    alert("Te has pasado de 21!!");
}else{
    alert("Bien, te has plantado con "+sumaValorCartas+ " , ahora le toca a la maquina");
    let num2=Math.round(Math.random()*10+1);
    while (sumaValorCartas2<=21) {
        let secundario;
        if (condition) {
         
        }
        num2=Math.round(Math.random()*10+1);
        sumaValorCartas2+=num2;
       
    }
}



