class Trunk {
    constructor(ctx, canvasSize, trunkPosX, trunkPosY, trunkSpeed, trunkSizeW, trunkSizeH) {
        this.ctx = ctx
        this.canvasSize = canvasSize


        this.trunkSize = {
            w: trunkSizeW,
            h: trunkSizeH
        }

        this.trunkPos = {
            x: trunkPosX,
            y: trunkPosY
        }
        this.trunkSpeed = trunkSpeed

        this.draw()
    }

    draw() {

        this.move()
        this.ctx.fillStyle = '#F0753B'
        this.ctx.fillRect(this.trunkPos.x, this.trunkPos.y, this.trunkSize.w, this.trunkSize.h)
    }

    move() {
        this.trunkPos.x += this.trunkSpeed

    }
}