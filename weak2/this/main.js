if (true) {
  console.log(this);
}
for (let i = 0; i < 5; i++) {
  // console.log(this);
}
/* setTimeout(()=>{
   // console.log(this);
},2000); */

const btn = document.querySelector("button");
btn.addEventListener(
  "click",
  function (e) {
    console.log(this); //button
  }.bind(window)//window로 묶어버리기
);
btn.addEventListener(
  "click",
  function (e) {
    console.log(this); //button
  }.bind("tomato")//string으로 묶어버리기
);
btn.addEventListener("click", (e) => {
  console.log(this); //window객체
});
