//fetch API를 이용해서 캡챠이미지를 가져 올 수 있다.

const myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "Dnzc7IwsWy2KOmF7D15i");
myHeaders.append("X-Naver-Client-Secret", "kcWQ7mOUpG");

const requestOptions = {
method: "GET",
headers: myHeaders,
redirect: "follow",
};

fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
.then((response) => response.json())//text -> json 변경 
.then((result) => {

    console.log(result.key);//json을 사용하면  substring안써도(안잘라줘도) 알아서 꺼내지네?  text일 때 사용하면 undifined 발생한다
})
.catch((error) => console.log("error", error));