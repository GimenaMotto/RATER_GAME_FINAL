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
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

    drawBeggining() {
        this.ctx.fillStyle = '#8C77D4'
        this.ctx.fillRect(0, this.canvasSize.h - 2 * this.canvasSize.row, this.canvasSize.w, this.canvasSize.row)
    }

    drawTransition() {
        this.ctx.fillStyle = '#8C77D4'
        this.ctx.fillRect(0, this.canvasSize.h - 6 * this.canvasSize.row, this.canvasSize.w, this.canvasSize.row)
    }
    drawFinishLine() {
        this.ctx.fillStyle = '#85D698'
        this.ctx.fillRect(0, this.canvasSize.h - 11 * this.canvasSize.row, this.canvasSize.w, 2 * this.canvasSize.row)
    }
    drawRoad() {
        this.ctx.fillStyle = '#66696E'
        this.ctx.fillRect(0, this.canvasSize.h - 5 * this.canvasSize.row, this.canvasSize.w, 3 * this.canvasSize.row)
    }
    drawWater() {
        this.ctx.fillStyle = '#C3E5FA'
        this.ctx.fillRect(0, this.canvasSize.h - 9 * this.canvasSize.row, this.canvasSize.w, 3 * this.canvasSize.row)
    }
}