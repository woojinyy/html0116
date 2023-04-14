//const text;//변수 선언 만  선언과 초기화 따로작성 안 된다
//변수 : 특정 데이터 값을 임시로 저장하는 공간
//언제쓰는데? 특정값, 반복적인 구문 , 값이 여러 코드에서 사용빈도가 많을 때

//변수 선언방식
//ES5 var 호이스팅이슈 발생
//ES6 [let또는 const 사용해라, ArrowFunction 사용해라] , ES7
//변수 작성 시 유의사항
//숫자로 시작이 불가, 특수문자 불가, 예약어를 변수명으로 사용 불가, 대소문자 구분해라
text = "Hanamon!"; // (선언 + 초기화 + 할당 된 상태)
console.log(text); // (선언 + 초기화 안 된 상태)  Undefined?? null?? 빈문자열??? 몰?루
console.log(text);
//선언과 초기화 한번에 하라고 const 재할당 안 된다
const text1 = "default"; //const 고정값 let은 변경될 수 있는 값
console.log(text1);
console.log(`text의값은${text1}`);

const 변수명 = "테스트";
console.log(변수명);
