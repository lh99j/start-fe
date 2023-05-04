const $plus = document.querySelector('#plus');
const $minus = document.querySelector('#minus');
const $count = document.querySelector('.count');

let count = Number($count.innerText);

function setText(dom, text){
    dom.innerText = text;
}

function updateCountUp(){
    setText($count, ++count);
}

function updateCountDown(){
    setText($count, --count);
}

$plus.addEventListener('click', updateCountUp);
$minus.addEventListener('click', updateCountDown);