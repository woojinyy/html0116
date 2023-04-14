// //데이터 타입

 const a = 5
 console.log(typeof a);//number
 console.log(typeof `이순신`==`string`);//이순신은 string타입이니? true
 console.log(typeof a==`string`);//false
 console.log(typeof a==`number`);//true
 console.log(typeof undeefined==`undefined`); //undefined도 타입으로 인식한다 true
 console.log(typeof null==`object`); //null은 오브젝트 true
 console.log(typeof true==`boolean`); //true
 console.log(typeof []==`object`); //대괄호는 배열true
 console.log(typeof {}==`object`); //중괄호는 객체true
 console.log(typeof function(){}==`function`); //function도 객체true

 function methodA(){
     console.log(`methodA`);
 }
 methodA()//메소드 함수 호출 methodA
 console.log(methodA);

 console.log([].constructor===Array);//===타입도 같니???,  == 값만 같니? true
 console.log({}.constructor===Object);//true
 console.log(Object.prototype.toString.call(null).slice(8,-1)===`Null`);

function checkType(data){
    return Object.prototype.toString.call(data).slice(8,-1);
}
const  checkType2=(data) => {//ES6 , ECMAScript - arrow function 
    return Object.prototype.toString.call(data).slice(8,-1);
}
console.log(checkType(null));// Null
 console.log(checkType(undefined));//Undefined
 console.log(checkType(`강감찬`));//String
 console.log(checkType2(null));//Null
 console.log(checkType2(undefined));//Undefined
 console.log(checkType2(`강감찬`));//String