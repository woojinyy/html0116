//실제 서비스 관점에서 보완
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
class AuthLogic {
  //가져다 쓸거야
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
} //end of AuthLogic
export default AuthLogic;

//크롬에서 서비스 사용 시 로그인정보가 수정될 때
//callback 되는 코드
//절대 개발자가
export const onAuthChange = (auth) => {
  return new Promise((reslove) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};

export const loginGoogle=(auth,googleProvider)=>{//로그인함수
  return new Promise((resolve,reject)=>{
    singinWithPopup(auth,googleProvider).then(
      (result)=>{//result에는 구글서버에서 전달해 주는 사용자 이름 언제인지 몰라 그래서 callback함수 쓴다
        const user =result.user //객체이겠지 왜 객체일까? 이름,사진,이메일주소... 상태정보 
        console.log(user);//json 형식
        reslove(user)//user정보를 reslove에 넘겨준다
      }).catch(e=>reject(e))
  })
}//end of loginGoogle
const authProvider = this.getProvider(providerName);//구글, 깃헙 문자열 정보 가져옴
return singinWithPopup(this.firevbaseAuth, authProvider);
export const logout = (auth) => {
  return new Promise((resolve, reject) => {
    auth.singOut().catch((e) => reject(alert(e + "로그아웃에러입니다.")));
    reslove();
  });
};
