const deptList = [
  { deptno: 10, dname: "개발1팀", loc: "인천" },
  { deptno: 20, dname: "개발2팀", loc: "경기" },
  { deptno: 30, dname: "개발3팀", loc: "강원" },
];
console.log(deptList);

//배열 추가 push
deptList.push({ deptno: 40, dname: "개발4팀", loc: "서울" });

let other = [];
// 배열 filter
/* 배열중에서 파라미터로 들어온 조건식을 만족하는 원소만 새로운 배열에 담는다*/
other = deptList.filter((row) => row.deptno > 10);


//수정  splice
let some =[]
some.splice(2,1, { deptno: 30, dname: "총무3팀", loc: "충남" },)
console.log(some)
console.log(deptList);
console.log(other);



