//controllers


let enter = true;

document.onkeydown = function (e) {
  switch (e.keyCode) {

    case 37:// left key
      man1.moveLeft()
      break;
    case 38:// up key
      man1.moveUp()
      break;
    case 39:// right key
      man1.moveRight()
      break;
    case 40:// right key
      man1.moveDown()
      break;
    case 13:// enter
      if(enter){
        enter = false;
        introSound.pause();
        bgsound.play()
        intro();
        break;
      }
  }

  if (e.keyCode === 37 && e.keyCode === 38) {
    man1.moveUp()
    man1.moveLeft()
  }
  if (e.keyCode === 37 && e.keyCode === 39) {
    man1.moveUp()
    man1.moveRight()
  }
  if (e.keyCode === 39 && e.keyCode === 40) {
    man1.moveRight()
    man1.moveDown()
  }
  if (e.keyCode === 37 && e.keyCode === 40) {
    man1.moveLeft()
    man1.moveDown()
  }
}

document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 37:// left key
      man1.stopDude()
      break;
    case 38:// up key
      man1.stopDude()
      break;
    case 39:// right key
      man1.stopDude()
      break;
    case 40:// right key
      man1.stopDude()
      break;
  }
}