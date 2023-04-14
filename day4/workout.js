const user=document.querySelector('.user_input');
/* html 을 js에서 쓰고싶어 -> 쿼리셀렉터  
객체 지정해주는 명령어 = document
*/
const btnAdd=document.querySelector('.btn_add');
/* 이벤트가 감지 되었을 떄 시스템에서 함수 호출 */
btnAdd.addEventListener("click",function(e){
    console.log("plus버튼 호출");
    addRow();

});


user.addEventListener("keypress",(e)=>{
    console.log("key==>"+e.key);
if(e.key==='Enter'){/* == 값만 같은지 비교 ===타입,값 둘다 같은지 */
    console.log("ENter이벤트호출성공");
    addRow();
}

});
function addRow(){
    //사용자가 입력한 운동명을 받아오는 함수
    const workName=user.value;
    console.log('사용자가 입력한 값=> ${workName}');
    if(workName===""){
        user.focus();//커서위치를 input type=text로가져온다
        return;//addRow탈출
    }
    //조건만족하지 않으면 inputtext를 초기화한다
    user.value="";
    user.focus();
}
