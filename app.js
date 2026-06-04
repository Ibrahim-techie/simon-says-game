let h2 = document.querySelector("h2");

let userSeq = []; //stores user clicked buttons
let gameseq = []; //stores machine flash buttons
let randombtns = ["red", "yellow", "green", "blue"];
let startgame = false;
document.addEventListener("keydown", function () {
  if (!startgame) {
    h2.innerText = "Level1";
    startgame = true;
    levelUp();
  }
});

let level = 0;
function levelUp() {
    level++;

    h2.innerText = `Level ${level}`;

    machineflash();      // add new color

    replaysequence();    // show entire sequence
}


function machineflash() {
  //machineflash
  let randomcolridx = Math.floor(Math.random() * randombtns.length);
  let colorval = randombtns[randomcolridx];
  gameseq.push(colorval);// storing the color value that machine choosed randomly 
  console.log(gameseq);

}



function replaysequence(){
gameseq.forEach(function(element,index){
    setTimeout(function(){
        document.getElementById(element).classList.add("machineflash");
        setTimeout(function(){
             document.getElementById(element).classList.remove('machineflash');
        },250);
    },index*500);
});
}

function userflash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function getclickbtn(btn){
let userclick = btn.id;
userSeq.push(userclick);
console.log(userSeq);
check();

}
let clickbtn = document.querySelectorAll(".btn");

for (let btn of clickbtn) {
  btn.addEventListener("click", function () {
    if(!startgame){
        return;
    }
    getclickbtn(this);
    userflash(this);
  });
}


function check(){
    let idx = userSeq.length - 1;
  
if(gameseq[idx]===userSeq[idx]){
if(userSeq.length===gameseq.length){
    userSeq=[];
    setTimeout(() => {
        levelUp();
    }, 1000);

}
}else{
    h2.innerText="Game Over press any to restart";
    restart();
}
     

   
}



function restart(){
    level=0;
    startgame=false;
    userSeq=[];
    gameseq=[];


}