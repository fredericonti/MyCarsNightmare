//frameRate to change, sometimes...
let frames = 0;


// the components of my game objects (instance)
let man1 = new Man(200, 300, 90, 60);
let stars = new Stars(1200, 200, 50, 50);
let rocks = new Rocks(1200, 200, 50, 50);
let enemy = new Enemy(1200, 100, 100, 100);
let bg = new Background(0, 0, 900, 600);


//load sound effects
let introSound = document.getElementById('introsound');
let bgsound = document.getElementById('mainsound');

let gameOverSound = document.getElementById('gameoversound');

// This create our context.

const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

//set size of the game(canvas)
canvas.width = 900
canvas.height = 600;

// this is the array of objects
let starArr = [];
let rockArr = [];
let enemyArr = [];
let myScore = 0


//sounds


//intro
let logo = new Image();
logo.src = './images/logo_final.png';
let bginit = new Image();
bginit.src = 'images/cap2.png';

logo.onload = () => {
  c.drawImage(logo, 150, 30, 600, 200);
}

bginit.onload = () => {
  console.log(frames)
  c.drawImage(bginit, 0, 0, 900, 600);
  introSound.play();
  c.fillStyle = 'white';
  c.font = '20px Prompt';
  c.fillText('Press ENTER to get crazy!', 325, 250);

}

// this starts the animation
function StartAnimation() {
  c.clearRect(0, 0, canvas.width, canvas.height)
  introSound.pause();
  bgsound.play();
  //score
  bg.draw();
  man1.newPos();
  man1.draw();
  man1.crashWith(enemy);
  createStars();
  console.log()
  createRocks();
  createEnemies();
  stars.newPos();
  stars.draw();
  checkCrash();

  //score
  c.fillStyle = 'white';
  c.font = '18px Prompt';
  c.fillText(`Score ${myScore}`, 20, 60);
  myScore += 1;
};

// inicializador
let interval;

// this is the interval
const intro = () => {
  interval = setInterval(StartAnimation, 15);
}

const createStars = () => {
  frames += 1
  console.log('stars', frames)
  for (let i = 0; i < starArr.length; i += 1) {
    starArr[i].x -= 10;
    if (frames % 2 == 0) {
      starArr[i].draw()
    }
  }
  if (frames % 4 === 0) {
    starArr.push(new Stars(900, Math.random(199) * 600, 100, 100))
  }
}

const createRocks = () => {
  frames += 1
  console.log('frame-rocks', frames)
  for (let i = 0; i < rockArr.length; i += 1) {
    rockArr[i].x -= 30;
    if (frames % 2 == 1) {
      rockArr[i].draw()
    }
  }
  if (frames % 20 === 0) {
    rockArr.push(new Rocks(900, Math.random(199) * 600, 100, 100))
  }
}

const createEnemies = () => {

  frames += 5
  console.log('enemies', frames)
  for (let i = 0; i < enemyArr.length; i += 1) {
    enemyArr[i].x -= Math.random() * 30
    enemyArr[i].draw()
  }

  if (frames % 40 === 0) {
    enemyArr.push(new Enemy(900, Math.random() * (540 - 60) + 60, 60, 60))
  }
}

//check if it crashed
function checkCrash() {
  let crashed = enemyArr.some(function (enemy) {
    return man1.crashWith(enemy);

  });

  if (crashed && !man1.crashed) {
    man1.lifeLoss();
    gameOver()
  }
  if (!crashed) {
    man1.crashed = false;
  }
}

//gameover
function gameOver() {
  if (man1.life === 0) {
    clearInterval(interval)
    c.clearRect(0, 0, canvas.width, canvas.height)
    let elonCry = new Image();
    elonCry.src = 'images/gameover.png';
    bgsound.pause();
    gameOverSound.play();

    elonCry.onload = () => {
      c.drawImage(elonCry, 0, 0, 900, 600);
      c.fillText(`Score ${myScore}`, 425, 120);
      c.fillStyle = 'black';
      c.font = '50px Prompt';
      c.fillStyle = 'white';
      c.fillText('GAME', 80, 280);
      c.fillText('OVER', 700, 280);
    }
  }
}

