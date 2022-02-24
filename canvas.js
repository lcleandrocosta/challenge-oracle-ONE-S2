// Variáveis principais
const botaoIniciar = document.querySelector('.btn-iniciar');
const botaoNovaPalavra = document.querySelector('.btn-input');
const palavraUsuario = document.querySelector('.input-nova-palavra');
const cabecalho = document.querySelector('.cabecalho');

//var letrasMaiusculas = ['A','B','C','D','E','F','G','H','I','J','K',
//'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var palavras = ['UVA','BANANA','ESCOLA','ORACLE','PROGRAMA', 'ALURA',];
var tamArray = palavras.length;
var posicaoArray = Math.floor(Math.random() * tamArray);
var palavra = palavras[posicaoArray];
var tam = palavra.length;
var letraPosicao;
var acertou = true;
var erros = 0;
var acertos = 0;

//Elemento canvas
var c = document.querySelector("canvas");
var ctx = c.getContext("2d");
var x = 0;

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


// Insere as letras digitadas na posição de acordo com a palavra sorteada
function insereLetras(letra, posicao){
    let x =  410;
    const VALOR = 80;
    for(let i=0; i<posicao+1; i++){
        ctx.font = '50px cursive';
        ctx.fillStyle = 'blue';
        if(i==posicao){
            ctx.fillText(letra, x, 395);
            ctx.stroke();
        }
        x = x + VALOR;
    }       
}

// Mostra a mensagem de vitória
function mostrarMsgVencedor(){
    ctx.font = '50px cursive';
    ctx.fillStyle = 'green';
    ctx.fillText('Parabéns! Você ganhou!!', 410, 210 );
    ctx.stroke();
}

//Mostra a mensagem de perda
function mostrarMsgPerdeu(){
    let palavraCerta = palavra;
    ctx.font = '30px cursive';
    ctx.fillStyle = 'red';
    ctx.fillText('Que pena! Você não acertou!!', 500, 90 );
    ctx.fillText('A palavra era:', 500, 150 );
    ctx.fillStyle = 'black';
    ctx.fillText(palavras[posicaoArray], 700, 150 );
    ctx.stroke(); 
}

// Mostra letras erradas
function mostrarLetrasErradas(letra, pos){
    let x = 410;
    const valor = 40;
    ctx.font = '50px cursive';
    ctx.fillStyle = 'red';
    for(let i=1; i<pos+1; i++){
        if(i == erros){
            ctx.fillText(letra, x, 335);
            ctx.stroke();
        } 
        x = x+valor;
    }      
}

//Inserir nova palavra
function insereNovaPalavra(){ 
    let palavraNova = palavraUsuario.value;
    let transfPalavraNovaMaiusc = palavraNova.toUpperCase();
    palavraUsuario.focus();
    palavras.push(transfPalavraNovaMaiusc);
    palavraUsuario.value = "";
}

// Recebe tecla digitada
function entraLetraDoJogador(event){
    var tecla = event.key;
    var letraDigitada = tecla.toUpperCase();
    let encontrou = palavra.match(letraDigitada);
    acertou = false;

    while(encontrou != null){ 
        letraPosicao = palavra.search(letraDigitada);
        insereLetras(letraDigitada,letraPosicao);
        palavra = palavra.replace(letraDigitada, '0');
        encontrou = palavra.match(letraDigitada);
        acertos++;
        acertou = true;
    }

    var tamanhoForca = 8;
    
    if(!acertou){
        erros++;
        
        montarForca(erros);
        mostrarLetrasErradas(letraDigitada, erros);
    }

    if(erros == tamanhoForca){
        mostrarMsgPerdeu();
    }

    if(acertos == tam){
        mostrarMsgVencedor();
    }
}


// Escuta o evento de teclado
function jogar(){
    // Dispara evento do teclado
    document.addEventListener('keydown', entraLetraDoJogador);
    
}

// Manipula os elementos da página
function manipularElementos(){
    document.querySelector("canvas").style.display = 'block';
    document.querySelector(".tabuleiro").style.display = 'block';
    document.querySelector(".div-nova-palavra").style.display = 'none';
    document.querySelector(".div-pg-inicial").style.display = 'none';
    document.querySelector(".div-btn").style.display = 'none';
    document.querySelector(".cabecalho").style.display = 'none'; 
    document.querySelector(".cabecalho-jogo").style.display = 'block';
}

//Função que inicia o jogo
function iniciarJogo(){
    manipularElementos();
    criaTracos(tam);
    jogar();
}

//Inicia o jogo ao clicar no botão Iniciar jogo.
botaoIniciar.addEventListener('click', iniciarJogo);
botaoNovaPalavra.addEventListener('click', insereNovaPalavra);

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

// Montar a forca de acordo com os erros
function montarForca(index){
    switch(index) {
        case 1:
            criaForcaVertical();
            break;
        case 2:
            criaForcaHorizontal();
            break;
        case 3:
            criaCabeca();
            break;
        case 4:
            criaCorpo();
            break;
        case 5:
            criaBracoDireito();
            break;
        case 6:
            criaBracoEsquerdo();
            break;
        case 7:
            criaPernaDireita();
            break;
        case 8:
            criaPernaEsquerda();
            break;
        default:
            alert('Perdeu');
    }
}
