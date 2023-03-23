// const a = "a";
// console.log(a);

// //error
// // a = 1;
// console.log(a) 

// const todos = ['운동'];

// const todo = '공부';
// todos.push(todo);
// console.log(todos)

//read 

// todos.forEach(function(todo){
//     console.log(todo);
// }); 


// console.log(todos)
// const updateTodo = '공부';

// const updateIndex = todos.findIndex(function(todo){
//     return todo == updateTodo;
// })

// todos[updateIndex] = '게임'

// console.log(todos)
// var newTodos = todos.map(function(todo){
//     if(todo === updateTodo){
//         return '게임';
//     }
//     return todo;
// })

// console.log(newTodos)

// var foo = 42;
// var foo = "bar";
// var foo = true;

// if("test"){
//     console.log(foo);
// }

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b)

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b)

// function byValue(count){
//     count = count + 2;

// }

// var count = 3;
// byValue(count);
// console.log(count);

// function byReference(count){
//     count.push('2');
// }

// var count = ['1'];
// byReference(count);
// console.log(count)

// for(var count = 0; count < 5; count++){
//     //총 5번 실행
// }

// var obj = {a: 1, b: 2};

// for(var prop in obj){
//     console.log(prop, obj[prop]);
// }

// var isClosed = true;

// while(isClosed){
//     //반복 코드

//     //false문을 만들어서 종료
//     isClosed = false;

//     break;
// }

// function sum(x){
//     var y = 1;
//     return x + y;
// }

// var sum = function(){
//     var y = 1;
//     return y;
// }

// //자주 사용
// alert('alert');
// var who = prompt('정말 삭제합니까?');
// isNaN('1'); //숫자 여부

// parseInt('12');
// parseInt('09', 10);
// parseFloat('10.33');

// function test(){
//     console.log('test()');
// }

// var id = setTimeout(test, 1000);
// var id = setInterval(test, 1000);

// var nuck = 'aji';

// function test(){
//     var age = 30;
//     console.log(nick, age);
// }

// test();
// console.log(age);

// var name = 'global';
// function test(){
//     console.log(name);
//     var name = 'local';
//     console.log(name);
// }

// test();

// test2();
// function test2(){
//     console.log('test');
// }

// var str = 'jeju';
// console.log(str.substring(0, 2));

// var str = new String('Jeju');
// console.log(str.substring(0, 2));

// function Obj(){
//     console.log(this);
// }

// var obj = new Obj();


// var count = [10,20,30,40,50,60,70,100];


// var count = [10,20,30,40,50,60,70,100];

// var sum = 0
// for(var i = 0; i < count.length; i++){
//     sum += count[i]
// }

// var avg = sum / count.length

// console.log(avg)

// for(var i = 1; i < 10; i++){
//     for(var j = 1; j < 10; j++){
//         console.log(i + "x" + j + "=" + i * j);
//     }
// }

// function print99Dan(){
//     for(var i = 1; i < 10; i++){
//         for(var j = 1; j < 10; j++){
//             console.log(i + "x" + j + "=" + i * j);
//         }
//     }
// }

// print99Dan();

var num = window.prompt("숫자를 입력해주세요.");
var sum = Number(num)

while(num !== null){
    num = window.prompt("숫자를 입력해주세요.");
    if(num !== null){
        sum += Number(num);
    }else
        break
    
}
alert(sum);

// var student = {
//     name: '형준',
//     age: 25,
//     height: 175
// }

// console.log(student.hasOwnProperty('name'));