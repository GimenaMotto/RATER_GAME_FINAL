class Player {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.playerSize = {
            w: this.canvasSize.h / 12,
            h: this.canvasSize.h / 12
        }

        this.playerPos = {
            x: this.canvasSize.w / 2 - this.playerSize.h / 2,
            y: this.canvasSize.h - 2 * this.canvasSize.h / 12
        }


    }

    move() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.playerPos.x >= 0 + this.playerSize.w / 2) this.playerPos.x -= this.playerSize.w / 2;
            if (evt.key === 'ArrowRight' && this.playerPos.x <= this.canvasSize.w - this.playerSize.w * 1.5) this.playerPos.x += this.playerSize.w;
            if (evt.key === 'ArrowUp' && this.playerPos.y >= 0 + this.canvasSize.h / 4) this.playerPos.y -= this.playerSize.h
            if (evt.key === 'ArrowDown' && this.playerPos.y < this.canvasSize.h - 2 * this.playerSize.h) this.playerPos.y += this.playerSize.h

        }
    }


    drawPlayer() {
        this.move()
        this.ctx.fillStyle = ' #237838'
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
    }
}