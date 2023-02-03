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
        this.homeInstance = new Image()
        this.homeInstance.src = ('./images/trash_can.png')
    }

    draw() {
        this.ctx.drawImage(this.homeInstance, this.homePos.x, this.homePos.y, this.homeSize.w, this.homeSize.h)
    }


}