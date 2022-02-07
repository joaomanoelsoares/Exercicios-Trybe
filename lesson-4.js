//Exercício 4: Caso o valor final da média dos arrays do exercício anterior seja menor que 20, imprimir ou não mensagem

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(var i = 0; i < numbers.length; i++){
    soma += numbers[i];
}

let media = soma / numbers.length

console.log("A soma dos elementos é de: " + soma);
console.log("O número de elementos é de: " + numbers.length);
console.log("A média é de: " + media);

if(media < 20){
    console.log("Valor menor que 20");
}else{
    console.log("Valor maior que 20");
}