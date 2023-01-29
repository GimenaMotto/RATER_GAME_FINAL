const game = {
    title: 'Our Froggy :)',
    authors: 'Miguel Ferragut, Gimena Motto',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    gameBoard: undefined,
    player: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    framesIndex: 0,
    cars: [],
    trunks: [],



    init() {

        this.setDimensions()
        this.setContext()
        this.createGameBoard()
        this.createCars()
        this.createPlayer()
        // this.colisions()

        this.start()

    },

    setContext() {
        this.ctx = document.querySelector("#canvas").getContext('2d')
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        document.querySelector('#canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('#canvas').setAttribute('height', this.canvasSize.h)

    },




    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 100 === 0) this.createCars()
            if (this.framesIndex % 100 === 0) this.createTrunks1()
            if (this.framesIndex % 50 === 0) this.createTrunks2()
            this.clearCars()
            this.clearTrunks()
            // this.colisions()

            // if (colisions() === true) console.log("te pille")
        }, 10)
    },

    //evenlisteners

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.gameBoard.drawGameBoard()

        this.cars.forEach(elem => elem.drawCars())
        this.trunks.forEach(elem => elem.drawTrunks())
        this.player.drawPlayer()
    },

    createGameBoard() {
        this.gameBoard = new Gameboard(this.ctx, this.canvasSize)

    },
    createPlayer() {
        this.player = new Player(this.ctx, this.canvasSize)
        console.log(this.player)
    },

    createCars() {
        this.cars.push(new Cars(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 12, this.canvasSize.h - 5 * this.canvasSize.h / 12, 30))
        this.cars.push(new Cars(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 5, this.canvasSize.h - 5 * this.canvasSize.h / 12, 30))
        this.cars.push(new Cars(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 12, this.canvasSize.h - 3 * this.canvasSize.h / 12, 30))
        this.cars.push(new Cars(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 4 * this.canvasSize.h / 12, -60))



    },

    createTrunks1() {
        this.trunks.push(new Trunks(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 9 * this.canvasSize.h / 12, 30, this.canvasSize.h / 4, this.canvasSize.h / 12))
        this.trunks.push(new Trunks(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 7 * this.canvasSize.h / 12, 30, this.canvasSize.h / 4, this.canvasSize.h / 12))
        //this.trunks.push(new Trunks(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 8 * this.canvasSize.h / 12, -60, this.canvasSize.h / 12, this.canvasSize.h / 12))
        //this.trunks.push(new Trunks(this.ctx, this.canvasSize, this.canvasSize.w - this.canvasSize.w / 20, this.canvasSize.h - 8 * this.canvasSize.h / 12, -60, this.canvasSize.h / 12, this.canvasSize.h / 12))


        //console.log(this.cars)
        // console.log(this.trunks)
    },

    createTrunks2() {
        //this.trunks.push(new Trunks(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 9 * this.canvasSize.h / 12, 30, this.canvasSize.h / 4, this.canvasSize.h / 12))
        //this.trunks.push(new Trunks(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 7 * this.canvasSize.h / 12, 30, this.canvasSize.h / 4, this.canvasSize.h / 12))
        this.trunks.push(new Trunks(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 8 * this.canvasSize.h / 12, -45, this.canvasSize.h / 12, this.canvasSize.h / 12))
        this.trunks.push(new Trunks(this.ctx, this.canvasSize, this.canvasSize.w - this.canvasSize.w / 20, this.canvasSize.h - 8 * this.canvasSize.h / 12, -45, this.canvasSize.h / 12, this.canvasSize.h / 12))


        //console.log(this.cars)
        // console.log(this.trunks)
    },
    clearCars() {
        this.cars = this.cars.filter(elem => elem.carsPos.x <= 2 * this.canvasSize.w && elem.carsPos.x >= -2 * this.canvasSize.w)
        return this.cars
    },

    clearTrunks() {
        this.trunks = this.trunks.filter(elem => elem.trunksPos.x <= 2 * this.canvasSize.w && elem.trunksPos.x >= -2 * this.canvasSize.w)
        return this.trunks
    },

    //  colisions() {
    //  return this.cars.some(elem => {
    //    return (
    //      this.player.playerPos.x + this.player.playerSize.w >= elem.carsPos.x &&
    //    this.player.playerPos.y + this.player.playerSize.h >= elem.carsPos.y &&
    //  this.player.playerPos.x <= elem.carsPos.x + elem.carsSize.w
    // )
    // })



    // },

    // gameOver() {
    //  if (this.colisions() === true) {
    //      console.log('Te pille')
    //  }
    //  }


}
