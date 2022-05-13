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
    let ask1=prompt("Seleccione la primera fila que quieres reemplazar");
    let ask2=prompt("Seleccione la segundo fila a reemplazar");
    let tabla=document.getElementById("tablita");
    let trAReemplazar1=document.getElementsByTagName("tr")[ask1];
    let trAReemplazar2=document.getElementsByTagName("tr")[ask2];
    let aux=trAReemplazar2
    tabla.appendChild
    tabla.replaceChild(trAReemplazar1,trAReemplazar2);
}
