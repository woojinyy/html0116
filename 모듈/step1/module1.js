export default 1;//default 사용하면 중괄호 사용불가

export const insa = "hello";
export const names = ["apple", "kiwi", "toamto"];

export const hap = (i, j) => {
  return i + j;
};
/*  */
export class Sonata {
  constructor() {
    this.wheelNum = 4;
    this.speed = 10;
  }
  speedUp = () => {
    this.speed = this.speed + 1;
  };
}
/* 
호이스팅 이슈   
    1) var i        변수
    2)head태그 안에 선언한 함수
    3) import문  - 모듈사용(ES6지원(module), 브라우저지원방식(common)) 

함수선언
1)선언적함수
2)익명함수-(콜백함수) 나중에 실행할게 자바스크립트 동기적(순서대로) 순서  (cf 자바 서순 함수 아무대나 선언 아무대나 호출 가능)
전제조건 : 자바스크립트에서는 함수도 객체이다
3)대입함수- 일급함수(변수에 함수)-> 고차함수 (return을 함수)=>리액트 배우려면 좀 쳐 외워라 리덕스(리액트에서 상태 관리구현하는 것)만드는 데 결정적 역할
const func =()=>{ 

}

4) 즉시 실행 함수 (호이스팅이슈 해결) (선언)(호출) ES6이전에는 호이스팅 이슈 해결하는 방법으로 사용되었다.



*/
