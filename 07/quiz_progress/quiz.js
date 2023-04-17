const $progres = document.querySelector('#progress');

let progressPercent = 0;
let value = 1;

const moveProgress = () => {
    if(progressPercent >= 100){
        progressPercent = 100;
        value = -value;
    }else if(progressPercent <= 0){
        progressPercent = 0;
        value = -value;
    }

    progressPercent += value;
    $progres.style.width = `${progressPercent}%`;
};

setInterval(moveProgress, 20);