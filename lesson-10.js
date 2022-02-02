//Exercício dez: Escrever um programa que converta uma nota dada em porcentagem em conceitos de A a F, definidos abaixo:
// >= 90%: A
// >= 80%: B
// >= 70%: C
// >= 60%: D
// => 50%: E
//  < 50%: F

let nota = 49;

if(nota >= 90){
    console.log("Você tirou A!")

}else if(nota >= 80){
    console.log("Você tirou B!")

}else if(nota >= 70){
    console.log("Você tirou C!")

}else if(nota >= 60){
    console.log("Você tirou D!")

}else if(nota >= 50){
    console.log("Você tirou E!")

}else{
    console.log("Você tirou F!")
}
