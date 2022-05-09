

function borrarPrimero() {
    primerLI=document.getElementsByTagName("li")[0];
    document.removeChild(primerLI);
}


function borrarSegundo() {
    const cant=document.getElementsByTagName("li");
    let tamano=cant.length;
    primerLI=document.getElementsByTagName("li")[tamano-1];
    document.removeChild(primerLI);
}

