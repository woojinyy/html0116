//스프레드연산자 spreadsyntax 전개연산자
// 원래 값보다 더 추가하고싶을 때 사용
const dept ={
    deptno :30,
    dname : '개발부',
    loc:'제주'
}

const emp ={
    empno :7566,
    ename : 'SCOTT',
    sal:25000
}
const deptnemp ={...dept,...emp}
console.log(deptnemp);
const emp2 ={...emp,empno:7499,ename:'TIGER',sal:3000}

let items = [
    //배열을 이용해서 초기화 해보자
    { id: 1, name: "벤치", count: 0 },
    { id: 2, name: "데드", count: 0 },
    { id: 3, name: "스쿼트", count: 0 },
  ];

  let item=[...items]
   item = [...items,{id:4 ,name:"풀업",count:0}]
   console.log(item);