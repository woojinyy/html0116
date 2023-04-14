//순서대로 처리 된다 = 동기적
console.log(1);
console.log(2);
console.log(3);

//2번에서 지연발생 되게 해보자
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(hap(1, 3));
//import 문이 뒤에 있음에도 불구하고 
import { hap } from "./module1.js";
console.log(3);
/* import문도 호이스팅 발생한다 
함수 선언
var 
*/

