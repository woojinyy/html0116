//스프레드연산자 spreadsyntax 전개연산자
// 원래 값보다 더 추가하고싶을 때 사용
const fruits = ['🍇','🍑','🍓']
const fruits2 = ['🥝','🍉','🍒']

const fruits3=['🍏',...fruits2]
fruits3.forEach(function(fr){
    console.log(fr);
})
fruits3.forEach((fruit,index)=>{
    console.log('${index}-${fruit}');
})
fruits3.forEach(function(fruit,index){
    console.log('${index}-${fruit}');
})
const fruits4=['🍍',...fruits3]
fruits4.forEach(function(fr2){
    console.log(fr2);
})

