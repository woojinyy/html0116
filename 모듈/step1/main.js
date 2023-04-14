import number from "./module1.js";
import { insa, names, hap, Sonata } from "./module1.js";

console.log(number);
console.log(insa);
console.log(names);
console.log(hap);//함수 전체를 받아서 함수를 보여준다 파라미터를 넣으면 진행을 하겠지
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
