const main = document.querySelector('main')

main.addEventListener('click',(e)=>{
    console.log(e.currentTarget);//선택지 반환
    console.log(e.target);//마우스 위치에있는 요소반환
})
main.addEventListener('click',function(e){
    console.log(e.currentTarget);//선택지 반환
    console.log(e.target);//마우스 위치에있는 요소반환
})
/* 
a.target
: 마우스 포인터 위치에 있는 요소를 반환

a.currentTarget
: 이벤트가 발생했을 때 이벤트문 상 선택지 요소 반환
 */