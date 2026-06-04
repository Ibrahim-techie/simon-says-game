let h2= document.querySelector('h2');


let randombtns=["red","yellow","green","purple"];
let startgame=false;
document.addEventListener('keydown',function(){
    if(!startgame){
    h2.innerText="Level1";
    startgame=true;
    levelUp();
    }

    
});

let level=0;
function levelUp(){
level++;


machineflash();
}

function machineflash(){//machineflash
    let randomcolridx = Math.floor(Math.random() * randombtns.length);
   let colorval = randombtns[randomcolridx];
 
    let btn=document.querySelector(`.${colorval}`);
   
    btn.classList.add('machineflash');

setTimeout(function() {
    btn.classList.remove('machineflash');
}, 250);
}


function userflash(btn){

   
    btn.classList.add('userflash');

setTimeout(function() {
    btn.classList.remove('userflash');
}, 250);
}



let clickbtn=document.querySelectorAll('.btn');

for(let btn of clickbtn){
    btn.addEventListener('click', function(){
        userflash(this);
    });
}
