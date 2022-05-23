function addElemento() {
    let ul=document.getElementById("ul1");
    
    let crearLi = document.createElement("li");
    let cajaTexto=document.getElementById("add").value;
    let textoAnadir=document.createTextNode(cajaTexto);

    crearLi.appendChild(textoAnadir);
    ul.appendChild(crearLi);
}

function delElemento() {
    let ul=document.getElementById("ul1");
    let PosicionABorrar=document.getElementById("del").value;
    let listaLi= document.getElementsByTagName("li")[parseInt(PosicionABorrar)-1];

    ul.removeChild(listaLi);

    
}