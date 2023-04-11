const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const $bug = document.querySelector('#bug');
const $box = document.querySelector('.box');
//bug는 (0, 0) ~ (380, 380)

let isClick = false;
let point = 0;
let life = 10;
let stop = 0;

let width = $box.offsetWidth - $bug.offsetWidth;
let height = $box.offsetWidth - $bug.offsetWidth;
let limit = { limitX : width, limitY : height};

let x = 0;
let y = 0;

function setBugClicked(event){
    $bug.style.display = "none";
    point++;
    $point.innerHTML = point;
    event.stopPropagation();
}

function gameOver(){
    window.alert("Game Over!")
    clearInterval(stop);
}

function setLifeDown(){
    life--;
    if(life === 0){
        gameOver();
    }
    $life.innerHTML = life;
}

function setBugLocation(){
    x = Math.floor(Math.random() * limit.limitX);
    y = Math.floor(Math.random() * limit.limitY);
}

function setAutoBugCreate(){
    setBugLocation();
    $bug.style.top = `${x}px`
    $bug.style.left = `${y}px`
    $bug.style.display = "block";
}

function setEventListener(){
    $bug.addEventListener('click', setBugClicked);
    $box.addEventListener('click', setLifeDown);   
}

function gameStart(){
    stop = setInterval(setAutoBugCreate, 1000);
    setEventListener();
}

gameStart();
