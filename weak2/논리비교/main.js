//부정
console.log(true);
console.log(!true);

console.log(!0); //true
console.log(!!0); //false 부정의 부정

console.log(!null);//true
console.log(!!null);//false

console.log(!NaN);//true
console.log(!undefined);//true
console.log(!{});//false
console.log(![]);//false
console.log(!"");//true
/* ************************************************************ */

//비교

const a = 1
const b = 2
console.log(a==b);//false
console.log(a!=b);//true
//일치
const x=1
const y=1
const z=`1`

console.log(x==y);//true
console.log(x==z);//true 

//값이 같은지와 타입까지도 같은지 비교
console.log(x===z);//false 타입까지 같니??
console.log(typeof z);//string
console.log(typeof x);//num 타입은 다르다

console.log(a>=b);
console.log(a<=b);//같다 기호는 반드시 오른쪽에