export class Character {
    constructor(img, spriteHeight, spriteWidth, speed, cw, ch) {
        this.img = img;
        this.spriteHeight = spriteHeight;
        this.spriteWidth = spriteWidth;
        this.frameX = 0;
        this.frameY = 2;
        this.x = 20;
        this.y = 0;
        this.speed = speed;
        this.direction = 'right';
        this.canvasWidth = cw;
        this.canvasHeight = ch;
    }
    update(frame) {
        if (this.direction == 'right') {
            if (this.x + this.spriteWidth == this.canvasWidth) {
                this.direction = 'down';
            }
            this.frameY = 2;
            this.x += this.speed;

            if (frame % 15 == 0) {
                if (this.frameX > 2) {
                    this.frameX = 0;
                } else {
                    this.frameX++;
                }

            }
        } else if (this.direction == 'down') {
            if (this.y + this.spriteHeight == this.canvasHeight) {
                this.direction = 'left';
            }
            this.frameY = 0;
            this.y += this.speed;

            if (frame % 15 == 0) {
                if (this.frameX > 2) {
                    this.frameX = 0;
                } else {
                    this.frameX++;
                }

            }
        } else if (this.direction == 'left') {
            if (this.x == 0) {
                this.direction = 'up';
            }
            this.frameY = 1;
            this.x -= this.speed;
            if (frame % 15 == 0) {
                if (this.frameX > 2) {
                    this.frameX = 0;
                } else {
                    this.frameX++;
                }

            }
        }
        else if (this.direction == 'up') {
            if (this.y == 0) {
                this.direction = 'right';
            }
            this.frameY = 3;
            this.y -= this.speed;

            if (frame % 15 == 0) {
                if (this.frameX > 2) {
                    this.frameX = 0;
                } else {
                    this.frameX++;
                }

            }
        }
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight)
    }
}