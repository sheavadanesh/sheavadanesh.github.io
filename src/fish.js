class Fish {
    constructor(ctx, canvas, word, x, y, color, eaten) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.word = word;
        this.color = color;
        this.eaten = eaten;

        this.orangeFishImg = new Image();
        this.grayFishImg = new Image();
        this.orangeFishImg.src = '../public/images/orange_fish.png';
        this.grayFishImg.src = '../public/images/gray_fish.png';
    }

    draw() {
        this.ctx.beginPath();
            if (this.color === 'orange') {
                this.ctx.drawImage(this.orangeFishImg, this.x, this.y, 60, 50);
            } else {
                this.ctx.drawImage(this.grayFishImg, this.x, this.y, 60, 50);
            }
            this.ctx.fillStyle = 'black';
            this.ctx.font = '16px "Jua"';
            this.ctx.margin = '15px';
            this.ctx.padding = '30px';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText((`        ${this.word}`), this.x + 20, this.y + 7);
            this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.x += 0.2;
    }

}

export default Fish;