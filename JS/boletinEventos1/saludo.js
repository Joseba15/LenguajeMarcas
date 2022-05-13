function saludo() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellidos");
    let saludo = document.getElementById("saludo");
    
    saludo.innerHTML = "Hola buenas tardes mi nombre es: "+ nombre.value + "apellido: " + apellido.value;

    
    
}