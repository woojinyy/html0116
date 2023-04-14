// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
console.log(text); // (선언 + 초기화 된 상태)
text = "Hanamon!"; // (선언 + 초기화 + 할당 된 상태)
var text; //변수 선언
console.log(text);

//사용이 선언보다 먼저 있지만 오류가 없는 게 오류이다

// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
console.log(text); // (선언 + 초기화 된 상태)
text = "Hanamon!"; // (선언 + 초기화 + 할당 된 상태)
let text; //변수 선언
console.log(text);
