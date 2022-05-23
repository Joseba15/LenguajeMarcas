function orden(){
    const provincias = ["Sevilla","Cadiz","huelva", "Malaga", "Granada", "Almeria", "Jaen", "Cordoba"];

    let tabla = document.getElementById("tabla");
    tabla.setAttribute("border","2");
    
    
    provincias.sort();

    for(let provincia of provincias ){
    let fila = document.createElement("tr");
    let colum = document.createElement("td");
    colum.innerHTML=provincia;
    fila.appendChild(colum);
    tabla.appendChild(fila);
}

}