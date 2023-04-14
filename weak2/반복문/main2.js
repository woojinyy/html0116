let colors = ["red", "green", "blue"];

//콜백함수 함수호출할 때 인수(파라미터)로 함수가 들어가는 형태
//    arr.forEach(callback함수(currentvalue[, index[, array]])[, thisArg])
//ES5 반복처리기능 만 ,ES6 순수 배열

//common
colors.forEach(function (color, index, items) {
  //3번 반복
  console.log(color); //red      green         blue
  console.log(index); //0           1                  2
  console.log(items); //[red green blue]////[red green blue]////[red green blue]//
});

//arrowfunction
colors.forEach((color, index, items) => {
  //for each에 map 될까??
  console.log(color); //red      green         blue
  console.log(index); //0           1                  2
  console.log(items); //[red green blue]////[red green blue]////[red green blue]//
});

colors.forEach;
