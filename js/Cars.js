class Cars {
    constructor(ctx, canvasSize, carsPosX, carsPosY, carsSpeed) {
        this.ctx = ctx
        this.canvasSize = canvasSize


        this.carsSize = {
            w: this.canvasSize.h / 12,
            h: this.canvasSize.h / 12
        }

        this.carsPos = {
            x: carsPosX,
            y: carsPosY
        }
        this.carsSpeed = carsSpeed

        this.drawCars()
    }

    drawCars() {

        this.moveCars()
        this.ctx.fillStyle = '#EDBC66'
        this.ctx.fillRect(this.carsPos.x, this.carsPos.y, this.carsSize.w, this.carsSize.h)




    }



    moveCars() {
        this.carsPos.x += this.carsSpeed

    }
}