var $wrap = document.getElementById("wrap");

console.log($wrap);

var element = document.querySelector('#wrap .item');

const div = document.createElement('div');
div.style.border = "1px solid red";
div.style.display = "inline-block";
div.innerHTML = '<div>asssssssssss</div>';

document.body.appendChild(div);

const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

const text = '<span>hello</span>'; 
document.querySelector('#debug').innerHTML = text;

const el = document.getElementById('div1');
el.remove();

window.load = function(){

}

window.addEventListener('load', function(){
    console.log(1);
})

var app = document.getElementById("list");

app.addEventListener("click", function(event) {
    if(event.target.nodeName == "LI"){
        console.log("LI");
    }
});