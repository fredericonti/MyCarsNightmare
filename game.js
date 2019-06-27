//frameRate to change, sometimes...
let frames = 0;


// the components of my game objects (instance)
let man1 = new Man(300, 540, 100, 90);
let stars = new Stars(1200, 200, 50, 50);
let enemy = new Enemy(1200, 100, 100, 100);
let bg = new Background(0, 0, 900, 600);


//load sound effects

// This create our context.

const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

//set size of the game(canvas)
canvas.width = 900
canvas.height = 600;

// this is the array of objects
let starArr = [];
let enemyArr = [];
let score = frames;


// this starts the animation
function StartAnimation() {
  c.clearRect(0, 0, canvas.width, canvas.height)
  bg.draw();
  man1.newPos();
  man1.draw();
  man1.crashWith(enemy);
  createStars();
  createEnemies();
  stars.newPos();
  stars.draw();
  checkCrash();
};


//this is the interval
let interval = setInterval(() => {
  StartAnimation();
}, 15);


const createStars = () => {
  frames += 5
  for (let i = 0; i < starArr.length; i += 1) {
    starArr[i].x -= 1;
    if (frames % 2 == 1) {
      starArr[i].draw()
    }
  }
  if (frames % 40 === 0) {
    starArr.push(new Stars(900, Math.random(199) * 500, 100, 100))
  }
}

const createEnemies = () => {

  frames += 10
  for (let i = 0; i < enemyArr.length; i += 1) {
    enemyArr[i].x -= Math.random() * 30
    enemyArr[i].draw()
  }

  if (frames % 800 === 0) {
    enemyArr.push(new Enemy(900, 150, 60, 60))
  }
}

function checkCrash() {
  let crashed = enemyArr.some(function (enemy) {
    return man1.crashWith(enemy);

  });


  // Life
  let emptyHeart = new Image();
  emptyHeart.src = './image/heart_empty.png';

  let fullHeart = new Image();
  fullHeart.src = './image/heart.png';

  if (crashed && !man1.crashed) {
    man1.lifeLoss();
    gameOver()
  }
  if (!crashed) {
    man1.crashed = false;
  }
}

function gameOver() {
  if (man1.life === 0) {
    clearInterval(interval)
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = 'white';
    c.font = '30px Arial';
    c.fillText('game over', 250, 250)
  }
}