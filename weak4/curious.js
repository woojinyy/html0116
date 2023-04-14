function sayHello() {
    return "Hello, ";
 }
 function greeting(helloMessage, name) {
   console.log(helloMessage() + name);
 }
 // `sayHello`를 `greeting` 함수에 인자로 전달
 greeting(sayHello, "JavaScript!");

 function sum(){
    const a=1
    const b =2
    return a+b
 }
 sum();