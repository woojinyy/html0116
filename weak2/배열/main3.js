//배열 Array
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조

const colors = [`빨`, `주`, `노`, `초`, `파`, `남`, , `보`]; //빈자리가 있어도 터지거나 하진 않는다 <1 empty item>

console.log(colors);

//arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

colors.forEach(function (아무이름, 아무이름2) {
  console.log(아무이름);
});

//화살함수
//colors.forEach(아무이름=>console.log(아무이름))//함수의 이름이 없다 사용자 호출이 불가하다  / 파라미터가 하나면 괄호 생략 가능  / 단일행이면 중괄호 생략 가능하다

colors.forEach((아무이름, index) => {
  //함수의 이름이 없다 사용자 호출이 불가하다
  //console.log(아무이름);
});
