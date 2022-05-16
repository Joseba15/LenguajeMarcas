function ordenar() {
    let numeros = document.getElementById("numeros");
    let listaNumeros = numeros.value.split(",");
    let ordenado = document.getElementById("ordenado");
    listaNumeros.sort();
    ordenado.innerHTML = listaNumeros;
}