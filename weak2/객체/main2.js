//객체

const student = {
  name: `이순신`,
  age: 55,
};
console.log(student);
console.log(student.name);
console.log(student["name"]);
let key = "name";
console.log(student[key]);

function Student2() {
  this.name = "강감찬";
  this.age = 56;
}
const student2 = new Student2();
console.log(student2);
console.log(student2.name);
console.log(student2[`name`]);

const student3 = new Object();
student.name = `김유신`;
student.age = 55;
console.log(student3);
console.log(student3.name);
console.log(student3[`name`]);

const studentA = {
  name: `나부모`,
  age: 29,
};
const studentB = {
  name: `나아들`,
  age: 29,
  parent: studentA,
};
console.log(studentA);
console.log(studentB);
const students = [studentA, studentB]; //대괄호 배열   중괄호=객체
console.log(students[0]);
console.log(students[0].name);
console.log(students[0].age);
console.log(students[1]);
console.log(students[1][`parent`][`name`]);
