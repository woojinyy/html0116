let colors = ["red", "green", "blue"];
//toString() 배열을 문자로 변환
const result = colors.toString()
console.log(typeof result);

//join () : 구분자를 활용해 문자열로 이어붙이기
const result2 = colors.join("+")
console.log(result2);

//pop 배열의마지막 요소제거(리턴값으로 잘라낸 요소 반환)
const result3 = colors.pop()
console.log(result3);

//push 배열의 끝 부분에 새로운 요소 추가(리턴값으로 배열의 길이 반환)
const result4 = colors.push("yellow")
console.log(result4);
//shift() 배열의 처음 요소 제거 (리턴값으로 잘라낸 요소 반환)
const result5 = colors.shift()
console.log(result5);

//unshift() : 배열의 첫부분에 새로운 요소 추가 (리턴값으로 길이반환)
const result6=colors.unshift("kiwi")
console.log(result6);

//splice삽입위치 잘라낼 개수 추가할 내용 - 배열에 새로운 요소를 잘라서 붙일 때
colors.splice(1,0,"black")
console.log(colors);

//concat () 두개의 배열을 합치기
const color2 = ["white", "brown"]
result7 = colors.concat(color2)
console.log(result7);

//slice() 배열 잘라내기 새로운 배열을 만들어서 잘라내기(리액트 CRUD처리시) 
//얕은 복사 원본은 바뀌지 않는다 새로운 배열에 반환된다
result8 = colors.slice(1);
console.log(typeof result8);
console.log(result8);
result8 = colors.slice(1,-1);
console.log(result8);

const result9 =[`object null`] //slice 배열과 string 에서 사용이 다르다 
console.log(result9.slice(8,-1));