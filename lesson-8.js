//Exercício oito: Faça um programa que defina se os três ângulos de uma forma geométrica são um triângulo ou não.

let a = 60;
let b = 60;
let c = 60;

let sum = a + b + c;

console.log("Os números inseridos foram: " + a + "," + b + "," + c);

if(sum == 180){
    console.log("É um triângulo!")
    console.log("A soma total dos ângulos é de: " + sum + " graus");
}else{
    console.log("Não é um triângulo.")
    console.log("A soma total dos ângulos é de: " + sum + " graus");
}