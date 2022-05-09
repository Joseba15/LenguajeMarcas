function anadirLaLista() {
    const crearLi=document.createElement("li");
    const nodoUl=document.getElementById("ul");
    const texto=document.createTextNode(document.getElementById("texto").value);
    const anadirTextoLi=crearLi.appendChild(texto);
    const anadirLiAUl= nodoUl.appendChild(anadirTextoLi);
    
}


//const nodoLiBorrar=document