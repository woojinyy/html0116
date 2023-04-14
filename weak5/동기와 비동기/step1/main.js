/* const double = (x) => {
  return x * 2;
};

const x = double(100); //얘가 실행 되면
console.log("x=" + x);
const y = x; //여기가 확정
console.log("y=" + y); */

const hap = (x, y) => {
    setTimeout(() => {
      return x + y;
  }, 3000); //3를 기다려야해서 undefined 뜬다 비동기상황
};

const x = hap(2, 3);
console.log("x=" + x);
const y = x;
console.log("y=" + y);
