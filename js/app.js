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



    init() {

        this.setDimensions()
        this.setContext()
        this.createGameBoard()
        this.createCars()
        this.createPlayer()

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

            if (this.framesIndex % 150 === 0) this.createCars()
            this.clearCars()
        }, 10)
    },

    //evenlisteners

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.gameBoard.drawGameBoard()
        this.player.drawPlayer()
        this.cars.forEach(elem => elem.drawCars())
        console.log(this.cars)
    },

    createGameBoard() {
        this.gameBoard = new Gameboard(this.ctx, this.canvasSize)

    },
    createPlayer() {
        this.player = new Player(this.ctx, this.canvasSize)
    },

    createCars() {
        this.cars.push(new Cars(this.ctx, this.canvasSize))

        console.log(this.cars)
    },
    clearCars() {
        this.cars = this.cars.filter(elem => elem.carsPos.x <= this.canvasSize.w)
        return this.cars
    },

}