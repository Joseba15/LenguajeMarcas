function muestra() {
    var elemento = document.getElementById("texto");
    elemento.classList.remove("oculto");
    elemento.classList.add("visible")
  
    var enlace = document.getElementById("enlace");
    enlace.classList.add("oculto");
  }