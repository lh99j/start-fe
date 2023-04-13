const $form = document.querySelector('#form');
const $result = document.querySelector('#result');

// 입력한 id,pw가 맞을경우엔 success , 아니면 error출력 
const id = "hello";
const pw = 'world';

$form.addEventListener('submit', function(evnet){
    evnet.preventDefault();

    const text = ($form.id.value === id && $form.pw.value === pw)? 'success':'error'
    
    $result.className = text;
    $result.innerHTML = text;
});

