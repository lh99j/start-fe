const $box = document.querySelector('#box');
console.log($box); 

let x = 0;
let y = 0;
let offset = {x : 0, y: 0};
let isDown = false;


$box.addEventListener('mousemove', function(e){
    if(!isDown) return;
    x = e.clientX;
    y = e.clientY;

    $box.style.left = x + offset.x + 'px';
    $box.style.top = y + offset.y + 'px';
})


$box.addEventListener('mousedown', function(e){
    offset.x = $box.offsetLeft - e.clientX;
    offset.y = $box.offsetTop - e.clientY;
    isDown = true;
});


$box.addEventListener('mouseup', function(){
    isDown = false;
});