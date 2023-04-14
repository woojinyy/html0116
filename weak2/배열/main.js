//배열 Array
//연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조

const colors = [`빨`, `주`, `노`, `초`, `파`, `남`,  `보`]; //빈자리가 있어도 터지거나 하진 않는다 <1 empty item>
const copy =[];
//배열 복사
/*
얕은 복사
     원본도 바뀐다 동기화

깊은복사
     복사본만 바뀜 비동기
 */

//이전방식
// for (let i = 0; i < colors.length; i++) {
//   copy.push(colors[i]);
//   console.log(`copy[${i}]:${copy[i]}`);
// }
//요즘
// colors.forEach(function (color) {
//   copy.push(color);
//   console.log(`${copy}`);
// });

["red", "green", "blue"].forEach(color=> {
  copy.push(color);
});
console.log(copy);