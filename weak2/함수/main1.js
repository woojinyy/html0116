function func1() {
  //이름이 있는 함수
  console.log(`func1`);
  func2(func1);
}
//func1 //주소번지
func1(); //함수 호출

function func2(func1) {
  console.log(func1);
}
func2();
