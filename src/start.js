class Start {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.catImg = new Image();
        this.catImg.src = '../public/images/cat.png';
    }

    drawStart() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'red';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Start', (this.canvas.width/2), 550);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawTitle() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 55px "Jua"';
            this.textAlign = 'center';
            this.justifyContent = 'center';
            this.ctx.fillText('Chonky Type', 249, 100);
            this.ctx.fill();
        this.ctx.closePath();
        
    }

    drawHeaderMessage() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = '24px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Try to get the cat as fat and as chonky as you can!',
                                (this.canvas.width/2), 
                                180);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawCat() {
        this.catImg.onload = () => this.ctx.drawImage(this.catImg, 220, 225, 360, 250);
    }
}

export default Start;