//var tela = document.querySelector('canvas');
//var traco = tela.getContext('2d');
var palavras = ['pa', 'alura', 'PARALEPIPEDO'];
var letra = palavras[1];
var tam = letra.length;

/*
var c = document.querySelector("canvas");
var ctx = c.getContext("2d");
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(20, 50);
ctx.lineTo(50, 50);
ctx.stroke();

ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(70, 50);
ctx.lineTo(100, 50);
ctx.stroke();

ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(120, 50);
ctx.lineTo(150, 50);
ctx.stroke();*/

function criaTracos(t){
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");
    var x1 = 100;
    var x2 = 150;
    const VALOR = 80;
    for(let i=0; i<t; i++){ 
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(x1, 100);
        ctx.lineTo(x2, 100);
        ctx.stroke();
        x1 = x1 + VALOR;
        x2 = x2 + VALOR;
    }
}

criaTracos(tam);
console.log(tam);
