class Trunks {
    constructor(ctx, canvasSize, trunksPosX, trunksPosY, trunksSpeed, trunkSizeW, trunkSizeH) {
        this.ctx = ctx
        this.canvasSize = canvasSize


        this.trunksSize = {
            w: trunkSizeW,
            h: trunkSizeH
        }

        this.trunksPos = {
            x: trunksPosX,
            y: trunksPosY
        }
        this.trunksSpeed = trunksSpeed

        this.drawTrunks()
    }

    drawTrunks() {

        this.moveTrunks()
        this.ctx.fillStyle = '#F0753B'
        this.ctx.fillRect(this.trunksPos.x, this.trunksPos.y, this.trunksSize.w, this.trunksSize.h)




    }



    moveTrunks() {
        this.trunksPos.x += this.trunksSpeed

    }
}