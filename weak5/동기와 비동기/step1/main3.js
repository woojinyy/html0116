const btnCart = document.querySelector(
  //자바스크립트는 기본적으로 동적처리이다
  //그러나 현실에서는 비동기적 상황들이 훨씬 많다
  "#btnCart"
); /* 자바스크립트에서 document 실행하면 터져 */
//코드는 앞에있는데 이벤트 발생 전까지 실행 안된다고
btnCart.addEventListener("click", () => {
    console.log("카트담기"); 
});
console.log("여기");
