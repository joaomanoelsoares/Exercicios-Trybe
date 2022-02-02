//Exercício 13: Escreva um programa que calcule o lucro de uma empresa que venda 1000 produtos, levando em conta um imposto de 20%

let qtde = 1000;
let custo = 10;
let imposto = (0.2*custo) + custo;
let venda = 20;
let lucro = venda - imposto;

console.log("O custo do produto sem impostos é de: " + custo);
console.log("O custo do produto com impostos de 20% é de: " + imposto);
console.log("Com isso, cada unidade do produto produzirá um lucro de R$: " + lucro);
console.log("Ao vender 1000 unidades, você obterá um lucro de R$: " + (lucro*1000));




