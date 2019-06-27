//controllers

document.onkeydown = function (e) {
  switch (e.keyCode) {

    case 37:// left key
      man1.moveLeft()
      break;
    case 38:// up key
      if (man1.jumping === false) {
        man1.moveUp()
      }
      break;
    case 39:// right key
      man1.moveRight()
      break;
    case 40:// right key
      man1.moveDown()
      break;
  }

  if (e.keyCode === 37 && e.keyCode === 38) {
    if (man1.jumping === false) {

      man1.moveUp()
      man1.moveLeft()
    }
  }
  if (e.keyCode === 37 && e.keyCode === 39) {
    if (man1.jumping === false) {
      man1.moveUp()
      man1.moveRight()
    }
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
      if (man1.jumping === false) {
        man1.stopDude()
      }
      break;
    case 39:// right key
      man1.stopDude()
      break;
    case 40:// right key
      man1.stopDude()
      break;
  }
}