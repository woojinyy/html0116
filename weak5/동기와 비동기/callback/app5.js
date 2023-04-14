const goodsSearch = (callback) => {
  setTimeout(() => {
    console.log("상품조회");
    callback();
  }, 2000);
};
const cart = (callback) => {
  setTimeout(() => {
    console.log("카트담기");
    callback();
  }, 3000);
};
const account = (callback) => {
  setTimeout(() => {
    console.log("결제하기");
    callback();
  }, 4000);
};
const delivery = () => {
  console.log("배송하기");
};
goodsSearch(() => {
  cart(() => {
    account(() => {
      delivery();
    });
  }); //일급함수 개념
});
/* 
이 처럼 순서대로 일처리 위해 콜백을 계속 반복해서 작성해야 하고
바깥쪽에서 안쪾으로 계속적인 들여쓰기가 되면서 해석,유지보수 하기도 불편해진다

*/
