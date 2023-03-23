// //Q1
const year = 2022;
const month = 12;
const day = 3;

// quiz
const dateString = year + '-' + month + '-' + day;

// 출력: 2022-12-03
console.log(dateString);

// ===========


//Q2
const dateString1 = "2022-12-12";

// quiz
const dateStringArray = dateString1.split('-');
const intDateArray = dateStringArray.map(part => parseInt(part));

// 출력: [2022,12,12];
console.log(intDateArray);


// ===========

//Q3
const text = "나는 XX를 좋아해";
const item = "JS";

// quiz
const replacedText = text.replace("XX", item);

// 출력: 나는 JS를 좋아해
console.log(replacedText);

// ===========

//Q4
const text1 = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

// quiz
const isTextContainsSearchText = text1.includes(searchText);

// 출력: true
console.log(isTextContainsSearchText)

// ===========

//Q5
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];
const point3 = [10, 20, 30, 40, 50]

// quiz
// point3이 생길수도 있을때 대응
const sum = (...arrays) => arrays.flat().reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const total1And2 = sum(point1, point2);
const total1And2And3 = sum(point1, point2, point3);

// 출력: 373 (모든 배열값들이 합)
console.log(total1And2);
console.log(total1And2And3);

// ===========

//Q6
const a = 1.2;
const b = 3.4;

// quiz
const numA = Math.floor(a);
const numB = Math.floor(b);

// 출력: 4
console.log(numA + numB);

// ===========

//Q7
const min = 1;
const max = 10;

// quiz
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

//출력: 3 (1~10 포함한 랜덤수)
console.log(randomNum);

// ===========

//Q8
const target = 10;
const num = 5;

// quiz
// target이 num이 배수인지
const isMultiple = target % num === 0;

// 출력: false
console.log(isMultiple);

// ===========

//Q9
const nick = "kakao";

// quiz
const upperNick = nick.toUpperCase();

// 출력: KAKAO
console.log(upperNick);

// ===========

//Q10
const items = [1, "a", true, ["a"], { n: 1 }];

// quiz
const primitiveItems = items.filter(item => typeof item !== 'object');

// 출력: [1,'a',true]
console.log(primitiveItems);

// ===========

//Q11
const items1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 2;

// quiz
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함
const newArr = [];
for(let i = 0; i < items1.length - 1; i++){
    var temp = items1[i];

    if((i + 1) % pageSize === 0 && i !== items1.length){
        temp = temp + '---' + items1[i + 1];
    }else if(i !== 0 && (i + 1) % pageSize === 1){
        continue;
    }
    newArr.push(temp);
}

const pad = '---';

const result = [];
items1.forEach((item, index) => {
    const isPaegPad = index % pageSize === 0 && index > 0
    if(isPaegPad){
        result.push(pad);
    }
    result.push(item);
})

// 출력: a,b,c---d,e,f---g,h,i---j
console.log(result.join(''));

// ===========

//Q12
