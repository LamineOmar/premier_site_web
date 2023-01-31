const button = document.querySelector('.buttonmenu');
const menuu = document.querySelector('.menu');
let clicked=false;
const nav = document.querySelector('.navbare');
 console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
button.addEventListener('click',()=>{
   
    if(!clicked){
    menuu.style.display='flex';
    nav.style.display='block';
    clicked=true;
    }
    else{
        menuu.style.display='none';
        clicked=false;
    }
})