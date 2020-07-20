class GameOver {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
    }

    draw20Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: MEGACHONK!!',
                                (this.canvas.width/2), 110);
            this.ctx.fill();
        this.ctx.closePath();
    }

    draw15Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: A CHONKY BOI!',
                                (this.canvas.width / 2), 110);
            this.ctx.fill();
        this.ctx.closePath();
    }

    draw10Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: Slight chonker!',
                                (this.canvas.width / 2), 110);
            this.ctx.fill();
        this.ctx.closePath();
    }

    draw5Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: Not very chonky.',
                                (this.canvas.width / 2), 110);
            this.ctx.fill();
        this.ctx.closePath();
    }

    draw0Win() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 40px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Chonk status: A fine boi, but not chonky at all.',
                                (this.canvas.width / 2), 110);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawWinMessage() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = '20px "Jua"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('He is the chonkiest boi thanks to you!',
                                (this.canvas.width / 2), 150);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawLoseMessage() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px "Jua"';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('...but he is still hungry :(',
            (this.canvas.width / 2), 150);
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawFishEaten(fishCount) {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'black';
            this.ctx.font = 'bold 20px "Jua"';
            this.textAlign = 'center';
            this.ctx.fillText('Fish eaten: ' + `${fishCount}`, (this.canvas.width/2), 200);
    }

    drawPlayAgain() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'red';
            this.ctx.textAlign = 'center';
            this.ctx.font = 'bold 30px "Jua"';
            this.fillText('Play Again', (this.canvas.width/2), 300);
            this.ctx.fill();
        this.ctx.closePath();
    }

}

export default GameOver;