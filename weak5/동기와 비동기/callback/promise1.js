//promise prototype 활용
const goodsSearch = () => {
  //resolve 성공시 콜백
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품조회"); //먼저 호출이지만 먼저 호출 안돼
      resolve();
    }, 2000);
  });
};
const cart = () => {
  console.log("카트담기");
};
//goodsSearch함수 호출될 때 콜백에서 cart함수를 호출하면
//순서가 ㅂ ㅗ장된다
goodsSearch().then(() => {
  cart();
});
//조회를 하고 카트에 상품을 담아야 하는데 카트 담기부터 나오면 이상하잖아 상품조회가 될 떄까지 기다렸다가 (=callback) 발생해야헤
