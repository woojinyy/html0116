//변수 선언시 var는 사용하지 않는다(호이스팅때문에)
//const 재할당 불가 재할당하면  TypeError: Assignment to constant variable.
//let
const num = 5; //선언과 초기화
const pi = 3.14;
//num =1; 재할당 불가능
let no = 3;
no = 6;
console.log(num);
console.log(no);
//typeof는 타입을 판별하는 연산자
console.log(typeof pi); // 타입체크
//NaN = Not a Number 숫자로 표기할 수 없음
//console.log(typeof (num +undefinded));
/* *********************************************************************** */
const num2 = 1;
console.log(num + 1); //6
console.log(num + num2); //6
console.log(num + null); //6
console.log(num + undefined); //6
/* ******************************************* ***************************/
//템플릿 리터럴 - 백틱기호 `
const str1 = `hello`;
const str2 = `${str1} world`; //`` 사용하면  변수를 사용할 수 있다.

console.log(str2);
/* ********************************************************************** */
const a = 0.1;
const b = 0.2;
console.log(a + b); //이진수로 처리하는 데 어쩔수없는 한계 like 냄새 어떻게 표현할건데?
//해결방안     numObj.toFixed([digits])  문자데이터로 바꿔주는 함수다
a.toFixed(1);
b.toFixed(1);
(a + b).toFixed(1);
console.log((a + b).toFixed(1)); //0.3
console.log(typeof (a + b).toFixed(1)); //string
console.log(typeof Number((a + b).toFixed(1))); //타입을  number로 바꿨다

/* -******************************************************************- -******/

//undefined -값이 할당되지 않은 상태- 기본적으로 갖는 값
let age = undefined;
console.log(age);
//전역 setTimeout() 메서드는 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정합니다.
setTimeout(function () {
  //콜백함수  2초이따가 실행해줄게
  //타이머가 만료된 뒤 실행할 function입니다.  이 값을 clearTimeout() (en-US)에 전달하면 타이머를 취소할 수 있습니다.
  age = 10;
  console.log(age);
}, 2000); //밀리세크단위 1000 =1초

//비동기 함수 = 맞추지 않는다 = 다른일 할 수 있다 = 새치기당한다
/* ******************************************************************** ********/

//null 어떠한 값이 존재하지 않는다

let age2 = null;
console.log(age2);

setTimeout(function () {
  age2 = 20;
  console.log(age2);
}, 3000);
/* ************************************************************************** */
//Boolean
const isOk = true;
const isFlag = false;
if (isOk) {
  console.log("참");
}
if (isFlag) {
  //isFlag는 거짓이라 이 구역은 실행 안되고
} else {
  console.log("거짓");
}
/* ************************************************************** */
//객체데이터 좌중괄호 우중괄호 안에 묶이는 대상을 객체
const student = {
  name: "이순신",
  age: 45,
  tel: null,
};
console.log(student);
console.log(student.email); //없는 속성 출력시 undefinded
console.log(student.name);
console.log(student.tel);
console.log(student[`name`]); //자바랑 다른 표현법도 있다
console.log(student[`age`]);

//배열, JSON 연관
