function reemplazo() {
    let posicionCambio;
    var tabla = document.getElementById("tabla");

    var nuevaFila = document.createElement("tr");

    var crearCelda1 = document.createElement("td");
    let texto1 = document.getElementById("posicion").value;
    let t = document.createTextNode(texto1);

    var crearCelda2 = document.createElement("td");
    let texto2 = document.getElementById("equipo").value;
    let t1 = document.createTextNode(texto2);

    var crearCelda3 = document.createElement("td");
    let texto3 = document.getElementById("puntos").value;
    let t2 = document.createTextNode(texto3);


    crearCelda1.appendChild(t);
    nuevaFila.appendChild(crearCelda1);

    crearCelda2.appendChild(t1);
    nuevaFila.appendChild(crearCelda2);

    crearCelda3.appendChild(t2);
    nuevaFila.appendChild(crearCelda3);
    posicionCambio = parseInt(document.getElementById("posicion").value);

    tabla.appendChild(nuevaFila);



    tabla.getElementsByTagName("tr")[posicionCambio].replaceWith(nuevaFila);



}