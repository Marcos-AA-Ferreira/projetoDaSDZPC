//"alert('Isso é um alerta')" criar uma janela de alerta para o usuário.
//console.log() permite que coloque a mensagem no console, no caso, na janela de inspeção
const btnAvancar = document.getElementById("btn-avancar");/*'const'  é usado para criar uma variável que não será e nem poderá alterada; 'btnAvancar' é o nome da variável; document.' referência a página html; 'getElementById()' busca um elemento pelo ID fornecido, lembrando que ele precisa existir na página html*/
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;/*'let'é usado para criar uma variável que poderá ser alterada futuramente*/
const cartoes = document.querySelectorAll(".cartao")/*'.querySelectorAll()' busca todos os seletores/class determinados*/

btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length -1) return;/*'===' se for igual a alguma coisa; 'length' "tamanho" da lista associada; 'return' simplesmente parar o código; importante: o -1 é usado, pois o primeiro item da lista equivale a zero, então para comparar é necessário usar o -1 */ //isso é uma validação para evitar erros.

    esconderCartaoSelecionado() /*Essa função foi definida abaixo é serve para economizar espaço e organizar o código*/

    cartaoAtual++;/*O '++' é usado para somar mais um no variável em questão(cartaoAtual)*/
    mostrarCartao();
});/*'.addEventListener()' permite detectar quando uma determinada ação é executada; Esse método pode receber alguns argumentos como no exemplo o "click" que detectar quando há um click no elemento e 'function(){}' que realizar uma função quando há a detecção do evento determinado, nesse caso, o click*/


btnVoltar.addEventListener("click", function(){

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado()

    cartaoAtual--;/*O '--' subtrai um do valor da variável*/
    mostrarCartao()
});

function esconderCartaoSelecionado()/*'function' permite criar uma função o reduz bastante a necessidade de repetir um código enumeras vezes, onde podemos simplesmente chamar uma função no lugar*/{
    const cartaoSelecionado = document.querySelector(".selecionado");/*'querySelector()' busca um seletor/class determinado*/
    cartaoSelecionado.classList.remove("selecionado");/*Remove uma nova classe ao elemento selecionado*/
};

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");/*Adiciona uma nova classe ao elemento selecionado*/
};