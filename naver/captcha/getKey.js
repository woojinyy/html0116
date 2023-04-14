/*express는웹 및 모바일 애플리케이션[하이브리드앱(웹+앱)] 을 위한 일련의 강력한 기능을 제공하는 간결하고
유연한 Node.js웹 애플리케이션 프레임워크
ExpressAPI를 이용하면 자유롭게 활용할 수 있는 수많은 HTTP유틸리티 메소드 및 미들웨어를 통해
쉽고 빠르게 강력한 API를 작성할 수 있다.
 */
const express = require('express');//웹어플리케이션을 위한 프레임워크 선언
//선언하면 프레임워크가 제공하는 API를 누릴 수 있다. 이때 node.js는 requier함수를 사용한다 react에서는 import가 제공된다
/* 
<script type="module"></script> 모듈을 지원하게 되면서 Netflix가 서버사이드를 Node.js기반으로 바꾸게 됐다
*/
const app = express();//express를 받고
//네이버 서버에서 발급한 고유아이디값 
const client_id = 'Dnzc7IwsWy2KOmF7D15i';//개발자센터에서 발급받은 Client ID 회원가입여부를 확인하는것과 같다
//개발제 센터에서 어플리케이션을 등록하고 받는 비번
const client_secret = 'kcWQ7mOUpG'; //개발자센터에서 발급받은 Client Secret
const code = "0";
let key;
//expressjs에서는 REST API를 지원하는 메소드를 제공하고있다. (GET방식)
//첫번째 파라미터 요청에 대한 응답을 받기위해 호출되는 함수 = 콜백함수
//두번째 파라미터는 콜백 함수 
//http 프로토콜을 이용하여 서버에 요청하고 응답처리를 위해서는 반드시 어떤 언어이든 요청객체와 응답객체를 제공받아야 한다
//express도 요청객체와 응답객체를  제공하고 있다.
//req는 요청객체의 인스턴스변수로 express로 부터 객체주입 받는다
//사용자가 생성하는것이 아니다.
//의존성 주입이라고 할 수 있다.(Dependency Injection)
app.get('/captcha/nkey', function (req, res) {
    //네이버 서버가 제안하는 URL주소 ->이주소를 통해 키값을 받아와야 한다(하나의 인증과정)
   const api_url = 'https://openapi.naver.com/v1/captcha/nkey?code=' + code; //쿼리스트링으로 코드값을 주어야 한다.
   //네이버가 제공하는 URL주소로 네이버서버에 요청
   //npm i -g request
   const request = require('request');//요청객체 이것을 이요해서 옵션에 필요한 url 정보와 header정보를넘기고
   
   const options = {
       url: api_url,
       //http 프로토콜을 통해 전송할 때 header, body가 있는데  get은 header를 이용한다
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {//콜백함수
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
       //res.end(body);
       //console.log(body);
        key=body.substring(8,24)//key값만 잘라서 보고싶어 전역변수로 17번에 let key 선언
        console.log(key);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 //express로 구성하는 서버의 포트번호는 3000번 
 //완성되는 url은 'http://127.0.0.1:3000/ 뒷부분은 파라미터로 처리되는 상태 
 app.listen(3000, function () {//app이 가리키는게 express express의 listen 함수를 통해 포트번호 3000
   console.log('http://127.0.0.1:3000/captcha/nkey app listening on port 3000!');
 });

 /* 
 REST API 

 개발자가 하고싶은 작업에 따라 다른 메소드로 요청을 하는 방법을 제공

 HTTP 메소드를 수단으로 이용
  |- GET : 데이터 조회// 
  |   POST : 데이터 등록 및 전송// 
  |   PUT : 데이터 수정 //
  |- DELETE: 데이터 삭제
 */