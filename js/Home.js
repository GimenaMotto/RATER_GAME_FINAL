class Home {
    constructor(ctx, canvasSize, homePosX, homePosY) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.homeSize = {
            w: this.canvasSize.row,
            h: this.canvasSize.row
        }

        this.homePos = {
            x: homePosX,
            y: homePosY
        }
    }

    draw() {
        this.ctx.fillStyle = '#F7AAFA'
        this.ctx.fillRect(this.homePos.x, this.homePos.y, this.homeSize.w * 1.5, this.homeSize.h)
    }


}