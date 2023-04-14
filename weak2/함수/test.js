const lis = document.querySelectorAll("ul li");
//같은 이름이면 브라우저가 자동으로 배열로 바꿔준다
// for (let x = 0; x < lis.length; x++) {//var를 쓰면 호이스팅이슈로 지역변수가 전역변수화 된다. for문안에서만 유지되어야 하는데 밖에서도 유지된다
//   lis[x].addEventListener("click", ()=> {
//     //버튼이 눌릴 때 마다 이벤트 감지
//     console.log(x);
//   });
// }
for (var x = 0; x < lis.length; x++) {
  ((index) => {
    lis[x].addEventListener("click", () => {
      console.log(index);
    });
  })(x);
}
