

function ordenarProvincias() {
    let provincias=['Sevilla','Cadiz','Huelva','Malaga','Granada','Almeria','Jaen','Cordoba'];
    provincias.sort();

    let crearTabla= document.createElement("table");
    
    crearTabla.setAttribute("border","1");

    for(let provincia of provincias ){
        
        let NodoTr = document.createElement("tr");
        let nodoTd = document.createElement("td");
        nodoTd.innerHTML=provincia;
        NodoTr.appendChild(nodoTd);
        crearTabla.appendChild(NodoTr);
    }
    
    document.getElementById("1").appendChild(crearTabla);    
}