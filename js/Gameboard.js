class Gameboard {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.gameboardSize = {
            w: this.canvasSize.w,
            h: this.canvasSize.h

        }

        this.waterSize = {
            w: this.canvasSize.w,
            h: 3 * this.canvasSize.row
        }

        this.waterPos = {
            x: 0,
            y: this.canvasSize.h - 9 * this.canvasSize.row
        }
        this.begginingInstance = new Image()
        this.begginingInstance.src = ("./images/grass2.png")
        this.transitionInstance = new Image()
        this.transitionInstance.src = ("./images/grass2.png")
        this.finishInstance = new Image()
        this.finishInstance.src = ("./images/road3.png")
        this.roadInstance = new Image()
        this.roadInstance.src = ("./images/road3.png")
        this.waterInstance = new Image()
        this.waterInstance.src = ("./images/water.png")
    }



    drawGameBoard() {
        this.drawBackground()
        this.drawBeggining()
        this.drawTransition()
        this.drawFinishLine()
        this.drawRoad()
        this.drawWater()
    }

    drawBackground() {
        this.ctx.fillStyle = '#8942FA'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

    drawBeggining() {
        this.ctx.drawImage(this.begginingInstance, 0, this.canvasSize.h - 2 * this.canvasSize.row, this.canvasSize.w, this.canvasSize.row)
    }

    drawTransition() {
        this.ctx.drawImage(this.transitionInstance, 0, this.canvasSize.h - 6 * this.canvasSize.row, this.canvasSize.w, this.canvasSize.row)

    }

    drawFinishLine() {
        this.ctx.drawImage(this.finishInstance, 0, this.canvasSize.h - 11 * this.canvasSize.row, this.canvasSize.w, 2 * this.canvasSize.row)
    }

    drawRoad() {
        this.ctx.drawImage(this.roadInstance, 0, this.canvasSize.h - 5 * this.canvasSize.row, this.canvasSize.w, 3 * this.canvasSize.row)

    }

    drawWater() {

        this.ctx.drawImage(this.waterInstance,
            0 - this.canvasSize.row, this.canvasSize.h - 9 * this.canvasSize.row,
            this.canvasSize.w + 2 * this.canvasSize.row,
            3 * this.canvasSize.row + 19)
    }
}
