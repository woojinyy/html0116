import { weatherKEY } from "../../../apiKEY.js";

const getWeather = (local, callback) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKEY}&q=${local}&units=metric`
  )
    .then((response) => response.json())
    .then((response) => console.log(response));
};

getWeather("seoul", () => {//callback 안해서 서울날씨가져오기 안찍혀
  console.log("서울날씨 가져오기");
});
getWeather("busan", () => {
  console.log("부산날씨 가져오기");
});
getWeather("incheon", () => {
  console.log("인천날씨 가져오기");
});
getWeather("tokyo", () => {
  console.log("도쿄날씨 가져오기");
});
getWeather("taipei", () => {
  console.log("타이페이날씨 가져오기");
});
