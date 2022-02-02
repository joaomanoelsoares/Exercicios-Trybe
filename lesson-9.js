//Exercício nove: Faça um programa que receba o nome de uma peça de xadrez e retorne o movimento que ela faz:
//Desafio: Fazer o comando funcionar, independente de a string ser escrita em letras maiúsculas ou minúsculas

let movT = "ANDAR";
let mov = movT.toLowerCase();
let pecaT = "abc";
let peca = pecaT.toLowerCase();

if(mov == "andar" && peca == "bispo"){
    console.log("Você andou com a peça Bispo")
}else{
    console.log("Você não realizou nenhuma ação")
}



