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

        this.image = new Image()
        this.image.src = ("./images/wood.png")

        this.draw()
    }

    draw() {

        this.move()

        this.ctx.drawImage(
            this.image,
            this.trunkPos.x,
            this.trunkPos.y,
            this.trunkSize.w,
            this.trunkSize.h)

    }

    move() {
        this.trunkPos.x += this.trunkSpeed

    }
}