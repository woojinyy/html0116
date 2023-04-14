let colors = ["red", "green", "blue"]; //리터럴을 이용한 배열 선언 및 초기화

for (color in colors) {
  console.log(color, "color:", colors[color]);
}

const student = {
  name: "이순신",
  age: 45,
  adress: "통영",
};
for (let key in student) {
  console.log(key, ",", student[key]);
  console.log(key + "," + student[key]);

  for (color of colors) {
    console.log("color:" + color);
  }
}
let items = [
  //배열을 이용해서 초기화 해보자
  { id: 1, name: "벤치", count: 0 },
  { id: 2, name: "데드", count: 0 },
  { id: 3, name: "스쿼트", count: 0 },
];

for (item of items) {
  console.log("item:" + item);
}

for (let i in items) {
  // for (변수 in 객체) 객체의 모든 프로퍼티 개수만큼 반복적으로 실행하고자 하는 실행문
  console.log(i, ",", items[i]);
}
for (items of items) {
  // for(변수 of 객체)
  console.log("item:" + item);
}
