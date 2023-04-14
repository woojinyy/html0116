// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
let text; //변수 선언 만
console.log(text); // (선언 + 초기화 안 된 상태)  Undefined?? null?? 빈문자열??? 몰?루
text = "Hanamon!"; // (선언 + 초기화 + 할당 된 상태)
console.log(text);
//자바스크립트에서는 타입이 실행될때 (런타임시) 결정된다

let tex1; //변수 선언 만
text1 = "Hanamon!"; // (선언 + 초기화 + 할당 된 상태)
console.log(text1); // (선언 + 초기화 된 상태)
