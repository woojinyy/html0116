//상품조회에서 지연 발생

const goodsSearch = () => {
  setTimeout(() => {
    console.log("상품조회"); //먼저 호출이지만 먼저 호출 안돼
  }, 2000);
};
const cart = () => {
  console.log("카트담기");
};
goodsSearch();
cart();
//조회를 하고 카트에 상품을 담아야 하는데 카트 담기부터 나오면 이상하잖아 상품조회가 될 떄까지 기다렸다가 (=callback) 발생해야헤
