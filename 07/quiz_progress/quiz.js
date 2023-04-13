const $progres = document.querySelector('#progress');

let progressPercent = 0;
let unit = 11;

const doingProgress = () => {
    if(progressPercent > 100 || progressPercent < 0){
        unit = -unit;
    }
    progressPercent += unit;
    $progres.style.width = `${progressPercent}%`;
};

setInterval(doingProgress, 500);