//Exercício 5: Descobrir o maior valor do Array e imprimi-lo

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;


for (let i = 0; i < numbers.length; i++) {
   if ( numbers[i] > maior ) {
      maior = numbers[i];
   }
}

console.log(maior);

console.log(numbers.length)