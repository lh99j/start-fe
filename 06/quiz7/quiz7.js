const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const $bug = document.querySelector('#bug');
const $box = document.querySelector('.box');
//bug는 (0, 0) ~ (380, 380).

let isClick = false;
let point = 0;
let life = 10;
let stop = 0;

let x = 0;
let y = 0;

function setBugClicked(){
    $bug.style.display = "none";
    point++;
    $point.innerHTML = point;
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
    x = Math.floor(Math.random() * 380);
    y = Math.floor(Math.random() * 380);
}

function setAutoBugCreate(){
    setBugLocation();
    $bug.style.top = `${x}px`
    $bug.style.left = `${y}px`
    $bug.style.display = "block";
}

function gameStart(){
    stop = setInterval(setAutoBugCreate, 2000);
}

$bug.addEventListener('click', setBugClicked);
$box.addEventListener('click', setLifeDown);

gameStart();


// $bug.style.top = "380px";
// $bug.style.left = "380px";