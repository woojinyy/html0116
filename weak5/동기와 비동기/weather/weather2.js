import { weatherKEY } from "../../../apiKEY.js";

const getWeather = (local, callback) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKEY}&q=${local}&units=metric`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      callback();
    });
};
//순서  서울 부산 인천 순으로
//callback 함수 지옥
getWeather("seoul", () => {
  console.log("서울날씨 가져오기");
  getWeather("busan", () => {
    console.log("부산날씨 가져오기");
    getWeather("incheon", () => {
      console.log("인천날씨 가져오기");
    });
  });
});
