//Exercício seis: Faça um programa que compare três números e defina o maior deles

const a = 15;
const b = 12;
const c = 20;

console.log("Os números a serem comparados são: " + a + "(a)" + "," + b +"(b)"+ "," + c + "(c)");

if (a > b && a > c){
    console.log("O maior número é: " + a + "(a)");
}else if(b > a && b > c){
    console.log("O maior número é: " + b + "(b)")
}else if(c > a && c > b){
    console.log("O maior número é: " + c + "(c)")
}
