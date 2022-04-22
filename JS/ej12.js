class Libro{
    
    constructor(titulo,autor,anno,genero){
        this.titulo=titulo;
        this.autor=autor;
        this.anno=anno;
        this.genero=genero;
    }

    mostrarInfo(){
        return `Titulo: ${this.titulo} ,autor ${this.autor} ,anño ${this.anno} y genero ${this.genero}`
    }
}

/*
const p1=new Libro('Hola','Mundo','2022','terror');
console.log(p1.mostrarInfo);
*/



    let listaLibros=[];
    let listaGeneros=['aventura'];
    let i=0;
    while(titulo!=0 ||autor){
        let titulo=prompt('Dame el titulo :');
        let autor=prompt('Dame el autor : ');
        let anno=prompt('Dame el anno : ');
        let genero=prompt('Dame el genero : ');
        

        listaLibros[i]= new Libro(titulo,autor,anno,genero);
        
    }



function monstrarLibros(){
    return listaLibros;
}

function autoresOrdenados() {
    return.
}

console.log(listaLibros);

