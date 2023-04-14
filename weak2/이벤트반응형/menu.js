const btns = document.querySelectorAll(".list li"); //array설정

let isFlag=1 //0아니면 다 참


for (let i = 0; i < btns.length; i++) {
  // btns[i].addEventListener('click',function(e){
  //     console.log(e.target);
  // })

  btns[i].addEventListener("click", (e) => {
    //인자 한개면 e에 있는 괄호 생략 가능
    console.log(e.target);

    if(isFlag){
        btns[i].setAttribute('class','on')
        
        --isFlag
    }else{
        btns[i].setAttribute('class','off')
        ++isFlag
    }
  });
}
