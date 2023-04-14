//필터

function Counter(){
    this.sum=0
    this.count=0
}
//prototype을 사용하면 사용자도 자바스크립트처럼 사용자정의객체를 선언한 뒤에 사용자 정의함수를 정의할 수 있다.
Counter.prototype.add = function(array){//파라미터로 배열을 받는다고 치면 그안에서 실행문을 가질 수 있는 구조가 되는거고
//그안에서 배열로 들어온값을 누적시켜서 sum 을 구하는거라면
//array이에 foreach문을 쓸수 있으니까
//typescript - 바닐라스크립트 기반에 얹혀진 언어 객체지향 캡슐화 상속 다형성
//react.js -> redux 사상 사용자 정의 구현해보기
//자바스크립트에서도 사용자정의 객체를 만들 수 있다. function을 사용
//사용자정의함수 (메소드)를 정의할 때는 prototype을 사용한다
//prototype을 사용하여 함수를 정의한다는 = 사용자 정의 API를 만드는 것
//파라미터와 반환값이 중요핳다 
array.forEach(function (item) {
    this.sum+=item
    ++this.count
},this);//this가 있어야 callback 함수가 된다
}
//    arr.forEach(callback(currentvalue[, index[, array]])[, thisArg]) 
//thisArg
//callback을 실행할 때 this로 사용할 값.

const obj = new Counter()
obj.add([2,5,9,2,8,9,15,5555,666884,8797894194878949,5,10,987,98789,897893])
console.log(obj.sum);
console.log(obj.count);

//객체를 만들 때도 function을 쓴다
//객체가 정의하는 함수를 만들 때는 prototype
//바닐라스크립트(순수한 스크립트)에서는 전역변수에 대한 선언 없이도  생성자에서 초기화 가능
//API(객체,함수)를 만들어라
//단, 내가 정의했기 때문에 표준이 아니다 배포가 안되어있다 
function Sonata(){
    this.whellNum
    this.speed
    this.carName
}
Sonata.prototype.stop= function (whellNum){
    console.log('stop 호출'+ whellNum);

}
const myCar =new Sonata()
myCar.stop(4)