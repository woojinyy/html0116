//destructureassignment
const obj = {
  //객체는 중괄호로 초기화
  a: 1,
  b: 2,
  c: 3,
};
const { a, b, e } = obj; // 해체해서 전부 중 일부만 꺼내서 쓰는경우
console.log(a);
console.log(b);
console.log(e); //undefined
const { c } = obj;
const { e1 = 5 } = obj;
const { y = 5 } = obj;
console.log(e1);
console.log(y); //obj 에 y가 없으니 14번에서 초기화 된 값이 출력
//false,  0, null, NaN, '', undefined

const arr = [1, 2, 3, 4, 5];
const [i, j, ...rest] = arr;
const [i2, j2, ...etc] = arr; //...나머지
console.log(i);
console.log(j);
console.log(rest);
