function addElemento() {
    let ul=document.getElementById("ulID");
    let newLi = document.createElement("li");
    let cajaTexto=document.getElementById("add").value;
    let texto=document.createTextNode(cajaTexto);
    let pos=document.getElementById("pos").value;
    let posicion= document.getElementsByTagName("li")[parseInt(pos)];

    
    newLi.appendChild(texto);
    ul.appendChild(newLi);
}




function delElemento() {
    let ul=document.getElementById("ulID");
    let deletePosicion=document.getElementById("pos").value;
    let listaLi= document.getElementsByTagName("li")[parseInt(deletePosicion)];

    ul.removeChild(listaLi);
}
    
