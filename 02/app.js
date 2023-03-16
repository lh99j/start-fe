/*
    여
    러
    줄
    주
    석
*/
// 변수선언
var title = "abc"

console.log(title)

// number
var count = 5
// string
var count = "5"

var nick = "AJ"
var nick = "AJ"

var isMan = true
var isMan = false

var isWoman = true
var isWoman = false

var log = function(str){
    console.log(str)
}

function log(str){
    console.log(str)
}

log(nick)

var image = {}

image.width = 100
image.height = 100

console.log(image)
console.log(image.height)
console.log(image['width'])

image['width'] = 1

console.log(image['width'])

var test = { alt : "babo" }
console.log(test.alt)

var image = ['1.jpg', '2.jpg', 2, 3, true]

image[0] = '3.jpg'

console.log(image[0])

var test = []
test[0] = 1
test[3] = 2

var nick = 'aj'

if(nick) console.log('hi~' + nick)

var isNick = Boolean(nick)

console.log(isNick)

if(isNick) console.log('hi~' + nick)

if(!!nick) console.log('hi~' + nick)

// typeof는 자주 사용함
typeof nick

var arr = [1, 2, 3, 4, 5]

for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}