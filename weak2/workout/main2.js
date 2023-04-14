let items = [
  //배열을 이용해서 초기화 해보자
  { id: 1, name: "벤치", count: 0 },
  { id: 2, name: "데드", count: 0 },
  { id: 3, name: "스쿼트", count: 0 },
];

//아이템 추가하기 - ES6 ECMAScript2016 arrow function
const handleAdd =()=> {
const workouts=[...items,{id:items.length+1,name:undefined,count:0}]
console.log(workouts);
console.log(items);
}



const handleDelete = (id)=>{
    const workouts = items.filter(item=>item.id !=id);
    console.log( workouts);
    items=[...workouts]
};
//handleDelete(2)
handleAdd()
//console.log(items);//원본을 바꿔줘야 화면에 반영