//파라미터에 함수 올 수 있다
//함수가 객체기 때문에 가능
//대입함수 가능
//함수를 변수로 하는 선언이 가능하다
//

const goodsSearch = (callback) => {
  setTimeout(() => {
    console.log("상품조회");
    callback();
  }, 2000);
};
const cart = () => {
  console.log("카트담기");
};
goodsSearch(() => {
  cart(); //일급함수 개념
});
//조회를 하고 카트에 상품을 담아야 하는데 카트 담기부터 나오면 이상하잖아 상품조회가 될 떄까지 기다렸다가 (=callback) 발생해야헤
//리턴타입 고차함수
//함수도 파라미터로 넘길 수 있다 = 일급함수
