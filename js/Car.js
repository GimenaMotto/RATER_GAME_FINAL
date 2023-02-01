class Car {
    constructor(ctx, canvasSize, carPosX, carPosY, carSpeed) {
        this.ctx = ctx
        this.canvasSize = canvasSize


        this.carSize = {
            w: this.canvasSize.row,
            h: this.canvasSize.row
        }

        this.image = {
            w: this.canvasSize.row,
            h: this.canvasSize.row
        }

        this.carPos = {
            x: carPosX,
            y: carPosY
        }
        this.carSpeed = carSpeed



        this.image = undefined

        this.draw()
    }

    draw() {

        this.move()

        this.image = new Image()
        this.image.src = ("./images/car.png")
        this.ctx.drawImage(
            this.image,
            this.carPos.x,
            this.carPos.y,
            this.carSize.w * 2,
            this.carSize.h)

    }




    move() {
        this.carPos.x += this.carSpeed

    }
}