const $btn = document.querySelector('#btn');
const $num = document.querySelector('#num')
const $result = document.querySelector('#result');

function print99Dan(){
    if(!!Number($num.value)){
        let str = "";
        for(let i = 1; i < 10; i++){
            str += `<div>${$num.value} x ${i} = ${$num.value * i}`;
        }
        $result.innerHTML = str;
    }else{
        window.alert("숫자를 입력해주세요.");
    }
    
}

$btn.addEventListener('click', print99Dan);

console.log($btn);
