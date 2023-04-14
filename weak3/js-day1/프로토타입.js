function Person(){
this.eyes=0
this.nose=0
}

Person.prototype.eyes=2
Person.prototype.nose=1
Person.prototype.see=function(pic){
    console.log(pic);
}

const kim = new Person()
const song = new Person()

console.log(kim.eyes);
console.log(song.eyes);
kim.see('사진')
console.log(song.nose);
/* 
다른 객체에 정의된 메소드와 속성을 한 객체에서 사용할 수 있도록
하는 근간입니다. 
 */