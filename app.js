let h2= document.querySelector('h2');

let btns=document.querySelectorAll('btn');
let randombtns=["red","yellow","green","purple"];
let startgame=false;
document.addEventListener('keypress',function(){
    if(!startgame){
    h2.innerText="Level1";
    startgame=true;
    }

    levelUp();
});

let level=0;
function levelUp(){
level++;

btnflash();
}

function btnflash(){//machineflash
    let randomcolridx = Math.floor(Math.random() * randombtns.length);
    let colorval=randombtns[`${randomcolridx}`];
 
    let btn=document.querySelector(`.${colorval}`);
   
    btn.classList.add('flash');

setTimeout(function() {
    btn.classList.remove('flash');
}, 250);
}



