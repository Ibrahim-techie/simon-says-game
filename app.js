let h2 = document.querySelector("h2");

let userSeq = []; //stores user clicked buttons
let gameseq = []; //stores machine flash buttons
let randombtns = ["red", "yellow", "green", "blue"];
let startgame = false;
let bestscore = 0;
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

  updatebestscore();
  h2.innerText = `Level ${level}`;

  machineflash(); // add new color

  replaysequence(); // show entire sequence
}

function machineflash() {
  //machineflash
  let randomcolridx = Math.floor(Math.random() * randombtns.length);
  let colorval = randombtns[randomcolridx];
  gameseq.push(colorval); // storing the color value that machine choosed randomly
  console.log(gameseq);
}

function replaysequence() {
  gameseq.forEach(function (element, index) {
    setTimeout(function () {
      document.getElementById(element).classList.add("machineflash");
      setTimeout(function () {
        document.getElementById(element).classList.remove("machineflash");
      }, 250);
    }, index * 500);
  });
}

function userflash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function getclickbtn(btn) {
  let userclick = btn.id;
  userSeq.push(userclick);
  console.log(userSeq);
  check();
}
let clickbtn = document.querySelectorAll(".btn");

for (let btn of clickbtn) {
  btn.addEventListener("click", function () {
    if (!startgame) {
      return;
    }
    getclickbtn(this);
    userflash(this);
  });
}

function updatebestscore() {
  bestscore = Math.max(bestscore, level);
}

function check() {
  let idx = userSeq.length - 1;

  if (gameseq[idx] === userSeq[idx]) {
    if (userSeq.length === gameseq.length) {
      userSeq = [];
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  } else {
    document.body.classList.add("game-over");

    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);
h2.innerHTML =
        `Game Over!<br>
         Score: ${level}<br>
         Best Score: ${bestscore}<br>
         Press Any Key To Restart`
  }
}

function restart() {
  level = 0;
  startgame = false;
  userSeq = [];
  gameseq = [];
}
