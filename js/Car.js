class Car {
    constructor(ctx, canvasSize, carPosX, carPosY, carSpeed) {
        this.ctx = ctx
        this.canvasSize = canvasSize


        this.carSize = {
            w: this.canvasSize.row,
            h: this.canvasSize.row
        }

        this.carPos = {
            x: carPosX,
            y: carPosY
        }
        this.carSpeed = carSpeed

        this.draw()
    }

    draw() {

        this.move()
        this.ctx.fillStyle = '#EDBC66'
        this.ctx.fillRect(this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)




    }



    move() {
        this.carPos.x += this.carSpeed

    }
}