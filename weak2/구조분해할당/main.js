//destructureassignment
const fruits = ['🍇','🍑','🍓']
const fr1=fruits[0]
const fr2=fruits[1]
const fr3=fruits[2]
console.log(fr1,fr2,fr3);
const [f1,f2,f3]=fruits
console.log(f1,f2,f3);
//배열 대괄호

//객체 중괄호
const dept={
    deptno: 30,
    dname: '개발부',
    loc: '제주'
}
//  const {d1,d2,d3}=dept 
//  console.log(d1,d2,d3);
const {deptno, dname, loc}=dept
console.log(deptno,dname,loc);