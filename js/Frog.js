class Player {
    constructor(ctx, canvasSize, playerPosX, playerPosY, playerSpeed) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.playerSize = {
            w: this.canvasSize.row,
            h: this.canvasSize.row
        }

        this.playerPos = {
            x: playerPosX,
            y: playerPosY
        }

        this.playerPosInicial = {
            x: this.canvasSize.w / 2 - this.canvasSize.row / 2,
            y: this.canvasSize.h - 2 * this.canvasSize.row
        }

        this.playerSpeed = playerSpeed

        this.imageInstance = new Image()
        this.imageInstance.src = './images/ratcounter.png'
    }

    move() {
        document.onkeydown = evt => {

            if (evt.key === 'ArrowLeft' && this.playerPos.x >= 0 + this.playerSize.w / 2) this.playerPos.x -= this.canvasSize.row
            if (evt.key === 'ArrowRight' && this.playerPos.x <= this.canvasSize.w - this.playerSize.w * 1.5) this.playerPos.x += this.canvasSize.row
            if (evt.key === 'ArrowUp' && this.playerPos.y >= 0 + this.canvasSize.h / 4) this.playerPos.y -= this.canvasSize.row
            if (evt.key === 'ArrowDown' && this.playerPos.y < this.canvasSize.h - 2 * this.playerSize.h) this.playerPos.y += this.canvasSize.row
        }
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y + 15, this.playerSize.w, this.playerSize.h)
    }
}