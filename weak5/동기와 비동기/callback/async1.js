//async와 await
const goodsSearch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품조회");
      resolve();
    }, 2000);
  });
};
const cart = () => {
  //애는 promise없어서 밑에 카트에 await 안붙여
  console.log("카트담기");
};

const runTest = async () => {
  await goodsSearch();
  cart();
};
runTest();
