
function  saludar() {
    return 'Hola desde mi funcion';
}
let temp= saludar();

let cont=1;
while(cont<5){
    document.getElementById("apart1").textContent=temp;
    cont++;
}


/*
function saludarNombre(nombre) {
    return 'Hola '+nombre+ ' desde mi funcion'
}
let temp = saludarNombre('Joseba');
document.getElementById("apart1").innerHTML=temp;
*/

/*
function suma(num1,num2) {
    let resultado

    if (num1==3) {
        resultado=num1+num2
    }else{
        resultado=num1
    }

    return resultado;
}
let temp= suma(2,10);
document.getElementById("apart1").innerHTML="<h2>"+temp+"</h2>";
*/