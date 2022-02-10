

// -----------------------

function createElementoClasse(origin,novo,classe){

    let container = document.querySelector(origin);
    let newDiv = document.createElement(novo);
    newDiv.className = classe;
    container.appendChild(newDiv);
    }
    
    function createElemento(origin,novo){
    
        let container = document.querySelector(origin);
        let newDiv = document.createElement(novo);
        container.appendChild(newDiv);
        }
    
    function changeTextColor(param,col,text){
        document.querySelector(param).innerText = text;
        document.querySelector(param).style.color = col;
    }
    
    function getParent(filho){
        console.log(document.querySelector(filho).parentElement);
    }
    
    function getSon(pai){
        console.log(document.querySelector(pai).fristElementChild);
    }
    
    function acessElement(elemento){
        console.log(document.querySelector(elemento));
    }
    
    function createClass(elemento,classe){
        let doc = document.querySelector(elemento);
        elemento.className = classe
    }
    
    function removeChild(elemento,filho){
        let sect = document.querySelector(elemento);
        let rem = document.querySelector(filho);
        sect.removeChild(rem);
    }

// ----------------------

//Req 1
createElemento("body","h1");
changeTextColor("h1","black","Exercício 5.2 - JavaScript DOM");
//

//Req 2
createElementoClasse("body","main","main-content");

//Req 3
createElementoClasse("main","section","center-content");

//Req 4
createElemento("section","p");
changeTextColor("p","black","Este é um texto!");

//Req 5
createElementoClasse("main","section","left-content");

//Req 6
createElemento("main","section","right-content");

//Req 7
createElementoClasse("section","img","small-image");
document.querySelector("img").src = "https://picsum.photos/200";

//Req 8
createElemento("section","ul");
let select = document.querySelector("ul");
var array = 'um' + 'dois' + 'três' + 'quatro' + 'cinco' + 'seis' + 'sete' + 'oito' + 'nove' + 'dez';
createElementoClasse("ul","li","liUm");
createElementoClasse("ul","li","liDois");
createElementoClasse("ul","li","liTres");
document.querySelector(".liUm").innerText = "um";
document.querySelector(".liDois").innerText = "dois";
document.querySelector(".liTres").innerText = "tres";

//Req 9

createElementoClasse("main","h3","textoUm");
createElementoClasse("main","h3","textoDois");
createElementoClasse("main","h3","textoTres");

changeTextColor(".textoUm","black","Tag 1");
changeTextColor(".textoDois","blue","Tag 2");
changeTextColor(".textoUm","red","Tag 3");

//Req 1.1
createClass("h1","title")
createClass(".textoUm","description")
createClass(".textoDois","description")
createClass(".textoTres","description")

//Req 2.1

removeChild("main",".left-content");
removeChild("main",".textoUm");
removeChild("main",".textoDois");
removeChild("main",".textoTres");



//Req 3.1


let centSec = document.querySelector("section").parentElement;
centSec.style.backgroundColor = "black";






    