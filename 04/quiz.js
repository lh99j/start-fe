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
var newArr = [];
for(let i = 0; i < items1.length; i++){
    var temp = items1[i];
    if(i == items1.length - 1 || i == 0){
        newArr.push(temp);
    }else{
        if((i + 1) % pageSize == 0){
            temp = items1[i] + '---' + items1[i + 1];
        }else if((i + 1) % pageSize == 1){
            continue;
        }

        newArr.push(temp);
    }
}
// 출력: a,b,c---d,e,f---g,h,i---j
console.log(newArr.join());

// ===========

//Q12
const item2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize2 = 3;

// quiz
// pageSize에 따라 배열값 분리해서 출력
var newArr = [];
var tempArr = [];
for(let i = 0; i < item2.length; i++){
    if((i + 1) % pageSize2 == 0){
        tempArr.push(item2[i]);
        tempArr.join();
        newArr.push(tempArr.join(','));
        tempArr = [];
    }else{
        tempArr.push(item2[i]);
    }
}
if(tempArr.length != 0 ){
    tempArr.join();
    newArr.push(tempArr);
}

// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]
console.log(newArr);

// ===========

//Q13
const items13 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize13 = 3;

const getStartIndexByPage = function (page) {
  // quiz
  return (page - 1) * pageSize13;
};

// 출력
getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6

// ===========

//Q14
const phoneNumber = `010-1234-1234`;

// quiz
// xxx-xxxx-xxxx 패턴찾기
const regex = /^\d{3}-\d{4}-\d{4}$/;

// 출력: true
console.log(regex.test(phoneNumber));

// ===========

// Q15
const user = { nick: "nio", age: 20, location: "제주" };

// quiz
delete user.location;
user.nick = 'nio';
user.age = 21;
user.name = '부산'; 

// 출력: {nick:'nio', age:21, name:'부산'}
console.log(user);

// ===========

// Q16
const text16 = "{a:1, b:2}";

// quiz
const obj16 = JSON.parse(text16.replace(/'/g, '"').replace(/(\w+):/g, '"$1":'));

// 출력: {a:1 , b:2}
console.log(obj16);

// ===========

// Q17
const user17 = { nick: "nio", age: 20, location: "제주" };

// quiz

// 출력: string "{ nick: 'nio', age: 20, location: '제주' }"
let str = "{ ";
for (const key in user) {
  str += `${key}: '${user[key]}', `;
}
str = str.slice(0, -2) + " }";

const newStr = `"${str}"`
console.log(newStr);

// ===========

// Q18
const items18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// quiz
const newArr18 = [];
for(let i = 0; i < items18.length; i++){
    if(items18[i] % 2 === 0){
        newArr18.push(items18[i]);
    }
}

// 출력: 짝수만 [2,4,6,8,10]
console.log(newArr18);

// ===========


// Q19
const list = [
    {
      id: 1,
      title: "JS",
      isPublic: true,
    },
    {
      id: 2,
      title: "기본",
      isPublic: true,
    },
    {
      id: 3,
      title: "ecma",
      isPublic: true,
    },
    {
      id: 4,
      title: "dom",
      isPublic: false,
    },
  ];
  
  // quiz
  let newArr19 = [];
  for(let i = 0; i < list.length; i++){
    if(list[i].isPublic === true){
         newArr19.push(list[i].title);
    }
  }
  
  // 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기
  console.log(newArr19);

// ===========

// Q20
const dday = "2022-02-18";

// quiz
const nextDay = new Date(dday);
nextDay.setDate(nextDay.getDate() + 1);
const formattedNextDay = nextDay.toISOString().slice(0,10);

// 출력: '2022-02-03'
console.log(formattedNextDay);