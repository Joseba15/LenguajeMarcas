const numParrafos = document.getElementsByTagName("p");
let numerosdeP =numParrafos.length;
console.log(`El html contiene ${numerosdeP} parrafos`);

const contenido2P= document.getElementsByTagName("p")[1];
console.log(contenido2P.innerHTML);


const numEnlaces = document.getElementsByTagName("a");
let numerosdeA =numParrafos.length;
console.log(`El html contiene ${numerosdeA} enlaces`);

const contPrimerA= document.getElementsByTagName("a")[0].getAttribute("href");
console.log(contPrimerA.innerHTML);

const contUltimoA= document.getElementsByTagName("a")[2].getAttribute("href");
console.log(contUltimoA.innerHTML);

const numAdentrodel1P= document.getElementsByTagName("p")[0].getElementsByTagName("a");
let tamano =numAdentrodel1P.length;
console.log(`El html contiene ${tamano} enlace del primer parrafo`);

