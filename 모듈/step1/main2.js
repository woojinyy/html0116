import * as all from "./module1.js";

console.log(all);
console.log(all.insa);
console.log(all.names);
console.log(all.hap);
//매개변수로 함수를 받을 수 있다는 것은 함수가 객체라는 의미이다
//리턴타입을 함수로 사용가능하다는 것은 고차함수
//변수를 함수로 사용 가능하다는 것은 일급함수
//이런것들이 가능한 객체를 일급객체
const myCar = new Sonata();
console.log(`내 자동차의 바퀴수는 ${myCar.wheelNum}`);
myCar.speedUp();
console.log(`현재 소나타 속도는 ${myCar.speed}`);
myCar.speedUp();
console.log(`현재 소나타 속도는 ${myCar.speed}`);
myCar.speedUp();
console.log(`현재 소나타 속도는 ${myCar.speed}`);
myCar.speedUp();
console.log(`현재 소나타 속도는 ${myCar.speed}`);
