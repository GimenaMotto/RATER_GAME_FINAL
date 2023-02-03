class Counter {
    constructor(ctx, canvasSize, posX, posY) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.size = {
            w: this.canvasSize.row,
            h: this.canvasSize.row
        }

        this.pos = {
            x: posX,
            y: posY
        }
        this.counterInstance = new Image()
        this.counterInstance.src = './images/ratcounter.png'

    }

    draw() {
        this.ctx.drawImage(this.counterInstance, this.pos.x, this.pos.y, this.size.w, this.size.h)
    }


}
