
let aws="s";
let num=Math.round(Math.random()*10+1);
alert("Su carta es un " +num);
sumaValorCartas=num;
while (aws=="s" && sumaValorCartas<=21) {
    aws=prompt("Quieres introducir cartas? s/n");
    num=Math.round(Math.random()*10+1);
    sumaValorCartas+=num;
    alert("Su carta es un " +num);
    alert("Lleva una suma de : "+sumaValorCartas);
}
if (sumaValorCartas>21) {
    alert("Te has pasado de 21!!");
}else{
    alert("Bien, te has plantado con "+sumaValorCartas+ " , ahora le toca a la maquina");
    let num2=Math.round(Math.random()*10+1);
    while (sumaValorCartas2<=21) {
        let secundario;
        if (condition) {
         
        }
        num2=Math.round(Math.random()*10+1);
        sumaValorCartas2+=num2;
       
    }
}