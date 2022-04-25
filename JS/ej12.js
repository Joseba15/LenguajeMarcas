class Libro{
    
    constructor(titulo,autor,anno,genero){
        this.titulo=titulo;
        this.autor=autor;
        this.anno=anno;
        this.genero=genero;
    }


    getAutor(){
        return this.autor; 
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
        for (let i = 0; i < array.length; i++) {
            let titulo=prompt('Dame el titulo :');
            let autor=prompt('Dame el autor : ');
            let anno=prompt('Dame el anno : ');
            let genero=prompt('Dame el genero : ');
            if (titulo!='' && autor!='' && genero!='' && anno.length==4 && !isNaN(anno) && (genero=='aventuras' || genero=='terror' || genero=='fantasia' )) {
                listaLibros.push(new Libro(titulo,autor,anno,genero));                    
                
            }
        }

function mostrarLibros(){
   console.log(books);
}


function autoresOrdenados() {
    let autores=[];
    for (const libro of listaLibros) {
        autores.push(libro.getAutor())
    }
    console.log(autores.sort);
}

mostrarLibros();
autoresOrdenados();

const  numbers=[12,25,47,84,98];
numbers.array.forEach(number => console.log(number));