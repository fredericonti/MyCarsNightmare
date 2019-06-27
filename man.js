
class Man {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.speedX = 0;
    this.speedY = 0;
    this.jumping = false;
    this.jumpInterval = 0;
    this.image = new Image();
    this.life = 3;
    this.image.src = 'images/comet-meteor-pngrepo-com.png';
    this.crashed = false;
    // life
    this.emptyHeart = new Image();
    this.emptyHeart.src = 'images/heart_empty.png';

    this.fullHeart = new Image();
    this.fullHeart.src = 'images/heart.png';
  }

  draw() {
    c.drawImage(this.image, this.x, this.y, this.sizeX, this.sizeY)
    switch (this.life) {
      case 3:
        c.drawImage(this.fullHeart, 20, 20, 15, 15);
        c.drawImage(this.fullHeart, 40, 20, 15, 15);
        c.drawImage(this.fullHeart, 60, 20, 15, 15);
        break;

      case 2:
        c.drawImage(this.fullHeart, 20, 20, 15, 15);
        c.drawImage(this.fullHeart, 40, 20, 15, 15);
        c.drawImage(this.emptyHeart, 60, 20, 15, 15);
        break;

      case 1:
        c.drawImage(this.fullHeart, 20, 20, 15, 15);
        c.drawImage(this.emptyHeart, 40, 20, 15, 15);
        c.drawImage(this.emptyHeart, 60, 20, 15, 15);
        break;
    }
  }

  newPos() {
    if (this.y >= 510 && this.isInXrange() === true) {
      this.y = 509.6
    } else {
      this.x += this.speedX;
      // uhu
      this.y += this.speedY;

    }
  }

  clear() {
    clearInterval(this.jumpInterval);
  }

  moveUp() {
    this.speedY = -45;
    this.jumping = true;
    this.jumpInterval = setInterval(() => {
      if (this.bottom() >= canvas.height) {
        this.stopDude();
        this.y = canvas.height - this.sizeY;
        this.jumping = false;
        this.clear();
      } else {
        this.moveDown();
      }
    }, 15);
  }

  moveDown() {
    this.speedY += 3;
  }

  moveLeft() {
    this.speedX -= 10;
  }

  moveRight() {
    this.speedX += 10;
  }

  stopDude() {
    this.speedX = 0;
    this.speedY = 0;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.sizeX;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.sizeY;
  }

  //CRASH TEST!
  crashWith(banana) {
    return (this.bottom() > banana.top()
      && this.top() < banana.bottom()
      && this.right() > banana.left()
      && this.left() < banana.right())
  }

  lifeLoss() {
    this.life -= 1
    this.crashed = true;
  }

  isInXrange() {
    if (this.x >= 0 && this.right() < 900) {
      return true;
    } else {
      return false;
    }
  }

  // returns true if param is in range [0..599]
  isInYrange() {
    if (this.y >= 0 && this.left() < 600) {
      return true;
    }
    else {
      return false;
    }
  }

  handleOutOfBounds() {
    if (isInXRange(this.x) == false) {
      this.speedX = 0;
    }

    if (isInYRange(this.y) == false) {
      this.speedY = 0;
    }
  }
}
