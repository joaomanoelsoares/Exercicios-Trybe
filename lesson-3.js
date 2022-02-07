//Exercício 3: Calcular e imprimir a média aritmética dos valores contidos no Array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(var i = 0; i < numbers.length; i++){
    soma += numbers[i];
}

let media = soma / numbers.length
console.log("A soma dos elementos é de: " + soma);
console.log("O número de elementos é de: " + numbers.length);
console.log("A média é de: " + media);



