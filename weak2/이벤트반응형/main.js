//클래스값이면 . 을 붙여야 하고 태그이름이면 붙이지마
const a = document.querySelector("a")
//DOM document object module
console.dir(a);//DOM 구조를 볼 수 있다.

a.onclick=()=>{
    console.log('링크클릭');
}
a.onclick=()=>{
    console.log('링크클릭 두번째');
}
a.addEventListener('click',()=>{
    console.log('클릭');
})
a.addEventListener('click',()=>{
    console.log('클릭두번째');
})