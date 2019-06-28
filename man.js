
class Man {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.speedX = 0;
    this.speedY = 0;
    this.image = new Image();
    this.life = 3;

    this.image.src = 'images/mycar_final.png';
    this.crashed = false;
    // life
    this.emptyHeart = new Image();
    this.emptyHeart.src = './images/heart_empty.png';

    this.fullHeart = new Image();
    this.fullHeart.src = './images/heart.png';
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

  moveUp() {
    this.speedY -= 10;
  }

  moveDown() {
    this.speedY += 10;
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

  boundaries() {
    if (this.top() + this.speedY > canvas.height || this.top() + this.speedY < 0) {
      this.speedY *= -1;
    }
    if (this.left() + this.speedX > canvas.width || this.left() + this.speedX < 0) {
      this.speedX *= -1;
    }
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


  newPos() {
    this.x += this.speedX;
    // uhu
    this.y += this.speedY;
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
    c.fillStyle = 'purple';
    c.fillRect(0, 0, 900, 600)
  }

}
