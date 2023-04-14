console.log(text);
text = "hello";
var text;
console.log(text);
/* 
호이스팅
: 블럭안에서 선언된 지역변수가 코드 블록 밖으로 클어 올려지면서 강제로
전역변수화 되는 현상

 const btns=document.querySelectorAll('ul li')
for(var j =0;j<btns.length;j++){
      btns[j].addEventListener('click',()=>{
        console.log(j);
   
    });
} 
*/
/* 
호이스팅이 일어나게 되면 0,1,2 이 출력되지 않고
3,3,3이 출력 된다
*/
/* const btns = document.querySelectorAll("ul li");
for (let j = 0; j < btns.length; j++) {
    btns[j].addEventListener("click", () => {
        console.log(j);
    });
} */

//호이스팅 해결 방법 2
//즉시실행 함수 카카오맵 api 가이드에 들어있는 내용
 const btns=document.querySelectorAll('ul li')
for(var j =0;j<btns.length;j++){
    ((index)=>{//index에 j가 들어간다
    btns[j].addEventListener('click',()=>{
        console.log(index);
    }
    )})(j)
    }
    /* 
    즉시실행함수 : 함수가 자기자신을 정의하자 마자 바로 자신을 호출하는 함수
    괄호 2개 들어감
    첫번째 괄호 : 함수의 선언부
    두번째 괄호 : 함수 호출
    익명의 함수 형태이지만 호출이 되는 이유는 두번째 괄호가 있기 때문
     */
//호이스팅이 일어나지만 즉시실행함수로 갇혀서 제대로 출력된다
// 캡슐화 capsulation 
