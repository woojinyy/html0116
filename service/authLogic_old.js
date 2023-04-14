import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
class AuthLogic { //객체 선언 - 자바스크립트에서 중복선언 불가
  //가져다 쓸거야
  constructor() {//익명생성자
    this.firebaseAuth = getAuth();//구글에서 객체를 주입해준다
    this.googleProvider = new GoogleAuthProvider();//구글 지원객체
    this.githubProvider = new GithubAuthProvider();//깃헙지원객체
  }
  login(providerName) {
    //파라미터에 인자값으로
    //console.log('providerName : '+ providerName);
    const authProvider = this.getProvider(providerName);
    //console.log('authProvider : '+ authProvider);
    //console.log('this.firebaseAuth : '+ this.firebaseAuth);
    //return signInWithPopup(this.firebaseAuth, authProvider);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
//logout버튼이 눌리면 호출
//그런데 굳이 export로 선언하는 이유
//리액트에서는 한 페이지를 모듈화 시켜서 재사용을 높이는 방식이라
//어떤 컴포넌트에서든지 호출이 가능하도록 설계하는것이 좋다 함수를
  logout() {
    this.firebaseAuth.signOut();
  }
//호출되면 파라미터값에 따라 변경사항이 있을 때마다 자동 호출
  onAuthChange(onUserChanged) {
    //구글에서 제공해주는 함수= onAuthStateChanged
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
//파라미터로 Google or Github
  getProvider(providerName) {//Google
    //제공업체에대한 스위치문
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthLogic; //외부에서 사용하기 위해 export
/* 
package.json 에는 의존관계 라이브러리 등록
1.개발자 의존  -D 실제 운영서버에는 미배포

2.배포 의존     -실제 운영서버에 배포
*/


/* 
외부 스크립트 사용법
    1. commonjs방식 -디폴트(생략되어 있음-package.json ->npm init -y)
        노드.js기반에서 get post 요청 할 떄 http라이브러리 이용하게 되는데
        그떄 const http = requires ('http')
    2. module방식
        import {...} from './xxx.js'

        리액트에서도 공통 사항
        authLogic.js ->리액트 수업 활용
        

        export {one,two,tree    }-여러개 가능
        export default -하나만 가능

        호이스팅
        var
        함수 선언
        import문
        -가장 먼저 실행이 된다,
         미루기 = defer 예약어 다운로드가 끝나고 브라우저(=태그 번역기)가 DOM Tree 그린다 이때까지 기다려
         DOM Tree가 완성되면 DOM API 사용 가능= document.querySelector() , document.querySelectorAll() => []
         브라우저는 같은 이름이 두개 이상이면 자동으로 배열 전환이 된다.
         예) checkbod name = hobby 
         배열- 데이터셋과 직결 json 
         
         json 누가 제공??
         유튜브API
    OpenWeather
HackerNews
내려받으려면 시간이 걸린다 비동기처리 발생         
따로따로 처리하다 먼저 처리가 되면= .then(()=>{}) 

         const temp = JSON.stringify *response.json()) 객체 -> 문자열
         const jsonDoc= JSON.parse(temp)문자열-> 배열
         jsonDoc[].xxxx

mime type
text/javascript
text/module
text/common->require

 */