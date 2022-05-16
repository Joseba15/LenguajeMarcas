function ordenarFila() {
    
    let tabla= document.getElementById("tabla");
    let listaFilas=document.getElementsByTagName("tr");
    let listaColumna=document.getElementsByTagName("td");

    let aux =[];

    for (let i = 0; i < listaFilas.length; i++) {
        for (let j = 0; j < listaColumna.length; j++) {
            aux.push(j);
            
        }    
    }

    aux.sort((a,b)=>a-b);
    
    
}