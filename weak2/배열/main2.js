//배열 Array
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조

const colors = [`빨`, `주`, `노`, `초`, `파`, `남`, `보`];
const c1 = colors[0];
const c2 = colors[1];
const c3 = colors[2];
const c4 = colors[3];
const { color1, color2, color3 } = colors;
console.log(c1);
console.log(colors);

//arr.filter(callback(element[,index[array]])[,thisArg])

colors.filter(function (순,서) {
  //실행문
  console.log(서);
  console.log(순);
});
