//Exercício doze: Escreva um programa que defina três números e retore true se pelo menos um dos três for ímpar. Caso contrário, retorne false
//Desafio: Use apenas um if

let a = 30;
let b = 40;
let c = 23;

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
    console.log("true");
}else{
    console.log("false");
}