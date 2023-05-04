const $plus = document.querySelector('#plus');
const $minus = document.querySelector('#minus');
const $count = document.querySelector('.count');

let count = Number($count.innerText);

function setText(dom, text){
    dom.innerText = text;
}

function setText(dom, text) {
    dom.innerText = text;
}

function updateCount(amount) {
    setText($count, count += amount);
}

$plus.addEventListener('click', () => updateCount(1));
$minus.addEventListener('click', () => updateCount(-1));