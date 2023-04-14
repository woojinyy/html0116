//promise prototype 활용

const goodsSearch = () => {
  //resolve 성공시 콜백
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품조회"); //먼저 호출이지만 먼저 호출 안돼
      resolve();
    }, 1000);
  });
};
const cart = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("카트담기");
      resolve();
    }, 3000);
  });
};
const account = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("결제하기");
      resolve();
    }, 2000);
  });
};
const delivery = () => {
  console.log("배송하기");
};
//fetch 함수 처럼 사용하기
goodsSearch()
  .then(() => cart())
  .then(() => account())
  .then(() => delivery());
