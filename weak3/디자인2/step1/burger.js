const burgericon = document.querySelectorAll(".navbar-menu-item"); //array설정

let isFlag=1  

for (let i = 0; i <burgericon.length; i++) {
if(isFlag){
    btns[i].setAttribute('class','on')
    
    --isFlag
}else{
    btns[i].setAttribute('class','off')
    ++isFlag
}
}