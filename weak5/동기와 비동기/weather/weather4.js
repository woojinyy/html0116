import { weatherKEY } from "../../../apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((reslove, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKEY}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        console.log(response.name + ", " + response.weather[0].description);
        reslove();
      });
  });
};
//순서  서울 부산 인천 순으로
//promise로 바꿔보기

getWeather("seoul")
    .then(() => {//서울이 두번 찍히는데 왜 그런거지??
        console.log("서울날씨 가져오기");
      return getWeather("seoul")//여기서 한번 더 불러서
    })
    .then(() => {
        console.log("부산날씨 가져오기");
        return getWeather("busan");
    })
    .then(() => {
        console.log("인천날씨 가져오기");
        return getWeather("incheon");
    });
