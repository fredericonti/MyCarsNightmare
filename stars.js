// ********************Starrrss********(caution!!)

class Stars {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 50;
    this.speedY = 50;
  }

    draw() {
      c.fillStyle = "white";
      c.fillRect(this.x, this.y, 5, 5)
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

