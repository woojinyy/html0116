//async 와 await으로 바꿔보기
import { weatherKEY } from "../../../apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((reslove, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKEY}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        //console.log(response.name + ", " + response.weather[0].description);
        reslove();
      });
  });
};
//순서  서울 부산 인천 순으로
//async 와 await으로 바꿔보기
const runTest=async()=>{
    console.log("서울날씨 가져오기");
    await getWeather("seoul")
    console.log("부산날씨 가져오기");
    await getWeather("busan")
    console.log("인천날씨 가져오기");
    await getWeather("incheon")
}
runTest();
/* 
promise가 반환하는 함수에서만
await을 붙여야 한다
console.log에는 await을 붙이면 안된다
async와  await은 대체로 함께 사용된다
await은 a,b,c 각각 케익을 구매
a가 먼저 밀크쉐이크주세요 어머  5분 ㄷㄱ 가능?  ㅇㅋㅇㅋ 밀크쉐이크 나올 동안 b,c주문 못해 => 동기
a 주문하고 만드는 동안 그 다음 b 주문   그 다음 c 주문  => 비동기(자바스크립트는 기본적으로)
*/

/* 
날씨를 제공하는 서버에 다녀오는(request<->response) 시간이 걸림으로  어느지역이 먼저 처리 될지 알 수 없다 그래서 순서가 코드 작성과 달리 뒤죽박죽이다
=호출하는 순서가 처리 순서를 의미하지 않는다

Q. 만일 순서를 보장하고 싶다면 어쾀????? 서울은 2초 걸리괴 부산은 4초걸리고 인천은 1초걸림 
A.  awiat을 걸면 서울이 나올 때 까지 기다려 그다음 부산 나오고 그다음 인천 순으로 

callback method를 반복해서 작성 -> 들여쓰기 arrowfunction이 반복해서 나온다
계속 반복적으로 callback함수를 작성하면 깊이가 깊어진다 -> 소스 분석이 어렵다

자바스크립트는 기본적으로 순서대로 작동한다 (동기적=서로 맞춘다) 기다려 순서대로야 
순서가 맞지 않는 것 (비동기) 먼저 끝나면 먼저 실행

*/