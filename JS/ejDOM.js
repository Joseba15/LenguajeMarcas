function anadirLaLista() {
    let lista=document.getElementById("lista");
    let crearLi=document.createElement("li");
    let texto=document.createTextNode(document.getElementById("texto").value);
    crearLi.appendChild(texto);
    lista.appendChild(crearLi);
    
}

function borrarPrimerElemento() {
    let lista=document.getElementById("lista");
    let primerLI=document.getElementsByTagName("li")[0];
    lista.removeChild(primerLI);
}
