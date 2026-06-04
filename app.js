let h2 = document.querySelector("h2");

let userSeq = []; //stores user clicked buttons
let gameseq = []; //stores machine flash buttons
let randombtns = ["red", "yellow", "green", "purple"];
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

  machineflash();
}

function machineflash() {
  //machineflash
  let randomcolridx = Math.floor(Math.random() * randombtns.length);
  let colorval = randombtns[randomcolridx];
  gameseq.push(colorval);// storing the color value that machine choosed randomly 
  
  let btn = document.querySelector(`.${colorval}`);

  btn.classList.add("machineflash");

  setTimeout(function () {
    btn.classList.remove("machineflash");
  }, 250);
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