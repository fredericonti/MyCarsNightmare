// ********************Enemy********(caution!!)

class Enemy {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 15;
    this.speedY = 15;
    this.image = new Image();
    this.image.src = 'images/8-will-smith-face-png-image.png';
  }

  draw() {

    c.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

}

