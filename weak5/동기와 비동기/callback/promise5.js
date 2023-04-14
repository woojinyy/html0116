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
  .then(cart) //파라미터로 cart를 넘기면 resolve가 cart함수전체를 받아서 처리해준다
  .then(account) //파라미터로 account를 넘기면 reslove가 account함수 전체를 받아서 처리해준다
  .then(delivery) //파라미터로 delivery를 넘기면 reslove가 delivery함수 전체를 받아서 처리해준다
  .then(() => console.log("배송완료")); //얜 그냥 쓰고 싶음
