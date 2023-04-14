// //Nullish

// //삼항연산자

// //조건? 참: 거짓

 const a= 1

 console.log(a<2?`참`:`거짓`);

 const 판정 = a<2 ?`참`:`거짓`

 console.log(판정);
 if(a<2) {
     console.log(`참`);
    
 }else{
     console.log(`거짓`);//참이라서 넌 일 안해
 }

 console.log(null??1);//1
 console.log(undefined??2);//2
 console.log(undefined??null);//null
 console.log(null ??1??3);//어차피 앞에가 null이면 뒤쪽은 영향 없다
 console.log(true??1??3);//true
 console.log(false??1??3);//false
 console.log(0??1??3);//0

 //OR연산자인경우
 const no = 0 //0은 false
 const num = no||7
 console.log(num);//7
 //Nulish 병합 연산자를 이용ㅇ하면 왼쪽부터 비교하는 것은 OR연산자와 동일
 //그러나 null, undefined 는 건너뛰고 나머지 데이터 만나면 처음 만나자마자 반환한다
// //그래서 0 출력
 const num2 = no??7
 console.log(num2);//0