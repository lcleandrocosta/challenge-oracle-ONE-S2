//var tela = document.querySelector('canvas');
//var traco = tela.getContext('2d');
const BOTAO = document.querySelector('button');
var palavras = ['pa', 'alura', 'PARADA'];
var letra = palavras[2];
var tam = letra.length;
var l = letra[0];
console.log(l);

//Elemento canvas
var c = document.querySelector("canvas");
var ctx = c.getContext("2d");

//Função que inicia o jogo
function iniciarJogo(){
    document.querySelector("canvas").style.display = 'block';
    document.querySelector(".div-nova-palavra").style.display = 'none';
    document.querySelector(".div-pg-inicial").style.display = 'none';
    document.querySelector(".div-btn").style.display = 'none';
    BOTAO.onclick = criaTracos(tam);
}

//Função para criar os traços de acordo com a quantidade de letras.
function criaTracos(t){
    var x1 = 400;
    var x2 = 450;
    const VALOR = 80;
    for(let i=0; i<t; i++){ 
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(x1, 400);
        ctx.lineTo(x2, 400);
        ctx.stroke();
        x1 = x1 + VALOR;
        x2 = x2 + VALOR;
    }
}

//Funções de criação de partes do boneco da forca
function criaForcaVertical(){
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 400);
    ctx.stroke();
}

function criaForcaHorizontal(){
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(50, 60);
    ctx.lineTo(300, 60);
    ctx.stroke();
}

function criaCabeca(){
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(300, 100, 30, 0, 2 * Math.PI, false)
    ctx.stroke();
}

function criaCorpo(){
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 130);
    ctx.lineTo(300, 300);
    ctx.stroke();
}

function criaBracoDireito(){
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(350, 100);
    ctx.stroke();
}

function criaBracoEsquerdo(){
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(250, 100);
    ctx.stroke();
}

function criaPernaDireita(){
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(350, 350);
    ctx.stroke();
}

function criaPernaEsquerda(){
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(250, 350);
    ctx.stroke();
}
//Fim das funções de criação do boneco da forca.

//Inicia o jogo ao clicar no botão Iniciar jogo.
BOTAO.addEventListener('click', iniciarJogo);

criaForcaVertical();
criaForcaHorizontal();
criaCabeca();
criaCabeca();
criaCorpo();
criaBracoDireito();
criaBracoEsquerdo();
criaPernaDireita();
criaPernaEsquerda();
console.log(tam);
