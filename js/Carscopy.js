// class Cars {
//     constructor(ctx, canvasSize) {
//         this.ctx = ctx
//         this.canvasSize = canvasSize


//         this.carsSize = {
//             w: this.canvasSize.h / 12,
//             h: this.canvasSize.h / 12
//         }

//         this.carsPos = {
//             x: undefined,
//             y: undefined
//         }

//         this.drawCars()
//     }

//     drawCars() {

//         this.moveCars()
//         this.ctx.fillStyle = '#EDBC66'
//         this.ctx.fillRect(0, this.canvasSize.h - 5 * this.canvasSize.h / 12, this.carsSize.w, this.carsSize.h)

//         this.ctx.fillStyle = '#EDBC66'
//         this.ctx.fillRect(700, this.canvasSize.h - 4 * this.canvasSize.h / 12, this.carsSize.w, this.carsSize.h)

//         this.ctx.fillStyle = '#EDBC66'
//         this.ctx.fillRect(0, this.canvasSize.h - 3 * this.canvasSize.h / 12, this.carsSize.w, this.carsSize.h)



//     }



//     moveCars() {
//         this.carsPos.x += this.carsSize.w / 20

//     }
// }