/*
function  saludar() {
    return 'Hola desde mi funcion';
}
let temp= saludar();
document.getElementById("apart1").textContent=temp;
*/


/*
function saludarNombre(nombre) {
    return 'Hola '+nombre+ ' desde mi funcion'
}
let temp= saludarNombre('Joseba');
document.getElementById("apart1").textContent=temp;
*/

function suma(num1,num2) {
    let resultado

    if (num1==3) {
        resultado=num1+num2
    }else{
        resultado=num1
    }

    return resultado;
}
let temp= suma(6,2);
document.getElementById("apart1").textContent=temp;