function crearFila() {
    let tabla= document.getElementById("tablita");
    let nuevoTr= document.createElement("tr");

    let nuevoTd1=document.createElement("td");
    let nuevoTd2=document.createElement("td");
    let nuevoTd3=document.createElement("td");

    let texto1=document.createTextNode(document.getElementById("td1").value);
    let texto2=document.createTextNode(document.getElementById("td2").value);
    let texto3=document.createTextNode(document.getElementById("td3").value);
    nuevoTd1.appendChild(texto1);
    nuevoTd2.appendChild(texto2);
    nuevoTd3.appendChild(texto3);
    nuevoTr.appendChild(nuevoTd1);
    nuevoTr.appendChild(nuevoTd2);
    nuevoTr.appendChild(nuevoTd3);
    tabla.appendChild(nuevoTr);
}

function borrarFila() {
    let ask=prompt("Seleccione la fila que quiere borrar");
    let tabla=document.getElementById("tablita");
    let trABorrar=document.getElementsByTagName("tr")[ask];
    //tabla.removeChild(trABorrar);
    trABorrar.remove();
}


function reemplazoFila() {
    const laTabla = document.getElementById("tablita");

    let fila1 = parseInt(prompt("Introduce el numero de la fila a cambiar")-1);
    
    let fila2 = parseInt(prompt("Introduce la nueva posicion")-1);

    const temp = laTabla.rows[fila1].innerHTML;
    laTabla.rows[fila1].innerHTML = laTabla.rows[fila2].innerHTML;
    laTabla.rows[fila2].innerHTML = temp;
}
