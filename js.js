let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');

//cria ordem aleatoria de cores
let shufferOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order.push(colorOrder);
    console.log(order);
    clickedOrder = [];

    for(let i in order){
        
        setTimeout(()=>{
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);},1300);
        
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 1000;
    setTimeout(() => {
        element.classList.add('selected');
    }, number-200);
    setTimeout(() => {
        element.classList.remove('selected');
    },50);
}

//checa se os botoes clicados sao os mesmos da ordem do jogo
let checkedOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVoce acertou! Iniciando proximo nivel`);
        nextLevel();
    }
}

//funçao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkedOrder();
    },250);   
}

//criar função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return orange;
    }else if(color == 3){
        return blue;
    }
}

//função para proximo nivel
let nextLevel = () => {
    score++;
    shufferOrder();
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVoce perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando um novo Jogo!');
    score = 0;

    nextLevel();
}

//evento de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
orange.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();