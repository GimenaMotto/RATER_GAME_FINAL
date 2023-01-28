class Cars {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize


        this.carsSize = {
            w: this.canvasSize.h / 12,
            h: this.canvasSize.h / 12
        }

        this.carsPos = {
            x: 0,
            y: this.canvasSize.h - 5 * this.canvasSize.h / 12
        }

        this.drawCars()
    }

    drawCars() {

        this.moveCars()
        this.ctx.fillStyle = '#EDBC66'
        this.ctx.fillRect(this.carsPos.x, this.carsPos.y, this.carsSize.w, this.carsSize.h)

        this.ctx.fillStyle = '#EDBC66'
        this.ctx.fillRect(this.carsPos.x, this.carsPos.y, this.carsSize.w, this.carsSize.h)

        this.ctx.fillStyle = '#EDBC66'
        this.ctx.fillRect(this.carsPos.x, this.carsPos.y, this.carsSize.w, this.carsSize.h)



    }



    moveCars() {
        this.carsPos.x += this.carsSize.w / 20

    }
}