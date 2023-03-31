var $board = document.querySelector('#board');

function createBoard(){
    var str = ""

    for(var i=0; i<4; i++){
        str += `<div style = "display:block;">`
        for(var j=0; j<4; j++){
            var isI = i % 2 === 0
            var isJ = j % 2 === 0
            
        
            if(isI === true && isJ === true){
                str += `<span class="black"></span>`;
            }else if(isI === false && isJ === false){
                str += `<span class="black"></span>`;
            }else if(isI === true && isJ === false){
                str += `<span class="white"></span>`;
            }else if(isI === false && isJ === true){
                str += `<span class="white"></span>`;
            }
        }
        str += `</div>`
    }
    
    $board.innerHTML = str;
    $board.style.border = "gray solid 4px"
    $board.style.display = "inline-block";
}

function setColor(){
    var blackBoard = document.querySelectorAll('.black');
    var whiteBoard = document.querySelectorAll('.white');
    
    blackBoard.forEach(function(userItem) {
        userItem.style.width = "100px";
        userItem.style.height = "100px";
        userItem.style.display = "inline-block";
        userItem.style.backgroundColor = "black";
    });
    
    whiteBoard.forEach(function(userItem) {
        userItem.style.width = "100px";
        userItem.style.height = "100px";
        userItem.style.display = "inline-block";
        userItem.style.backgroundColor = "white";
    });
}

createBoard();
setColor();

var boards = document.querySelectorAll('#board > div > span')
boards.forEach(function(item){
    item.addEventListener('click', function(){
        setColor();
        item.style.backgroundColor = "red";
    })
})