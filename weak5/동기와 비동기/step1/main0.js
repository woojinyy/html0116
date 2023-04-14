/* const double = (x) => {
  return x * 2;
};

const x = double(100); //얘가 실행 되면
console.log("x=" + x);
const y = x; //여기가 확정
console.log("y=" + y); */

const hap = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 3000);
};

const x = hap(2, 3, (result) => {
  console.log(result);
});
console.log("x=" + x);
const y = x;
console.log("y=" + y);
