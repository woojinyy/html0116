const a = document.querySelector("a");

// a.addEventListener('click',function(event){

// })
a.addEventListener("click", (event) => {
  //파라미터로 event를 넘긴다
  //전달이 되지 않게 하려면
  event.preventDefault();
});
/* 마우스 무브 */
const box = document.querySelector(".box");

box.addEventListener("mousemove", (event) => {
  // console.log(event);
  console.log(`현재 x축 위치 ${event.pageX}`);
  console.log(`현재 y축 위치 ${event.pageY}`);
});

window.addEventListener("mousewheel",(e)=>{
    console.log(e);
    if(e.deltaY>0) console.log("wheeldown");
    
    if(e.delyaY<0)console.log("whellup");
    
    
})
