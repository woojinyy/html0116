//객체 Object
/* 데이터를 property 라는 인덱싱을 통해 구조적으로 묶어놓은 형태
 */
let car = {
  name: `2023년형 소나타`,
  whellNum: 4,
  speed: 0,
  carColor: `red`,
};

console.log(car);
car.carColor = `검정색`; //재할당
console.log(
  `내자동차는${car.name}이고 바퀴수는 ${car.whellNum}개 색상은${car.carColor}입니다`
);
