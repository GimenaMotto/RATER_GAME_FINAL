const game = {
    title: 'Our Froggy :)',
    authors: 'Miguel Ferragut, Gimena Motto',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    gameBoard: undefined,
    player: undefined,
    homes: [],
    canvasSize: {
        w: undefined,
        h: undefined,
        row: undefined
    },

    framesIndex: 0,
    cars: [],
    trunks: [],
    player: [],



    init() {

        this.setDimensions()
        this.setContext()
        this.createHome()
        this.createPlayer()
        this.isTrunk()
        this.start()

    },

    setContext() {
        this.ctx = document.querySelector("#canvas").getContext('2d')
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasSize.row = window.innerHeight / 12
        document.querySelector('#canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('#canvas').setAttribute('height', this.canvasSize.h)
    },

    start() {

        this.reset()
        setInterval(() => {

            this.clearAll()
            this.drawAll()
            this.framesIndex++


            // if(this.isHome()) this.createPlayer(pushhhh)
            if (this.framesIndex % 120 === 0) this.createCar()
            if (this.framesIndex % 100 === 0) this.createTrunk1()
            if (this.framesIndex % 50 === 0) this.createTrunk2()
            this.clearCar()
            this.clearTrunk()

            //  if (this.isCollisions()) { this.reset() }
            // isTrunk()
            if (this.isHome()) { console.log("casita") }
            //  if (this.isWater()) { this.reset() }

        }, 10)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.gameBoard.drawGameBoard()

        this.homes.forEach(elem => elem.draw())
        this.cars.forEach(elem => elem.draw())
        this.trunks.forEach(elem => elem.draw())
        this.player.forEach(elem => elem.draw())

    },

    reset() {
        this.gameBoard = new Gameboard(this.ctx, this.canvasSize)
        // this.player = this.player.push(new Player(this.ctx, this.canvasSize))
        // this.player = new Player(this.ctx, this.canvasSize)
        this.cars = []
        this.trunks = []

        alert('Push to Start')
    },

    createPlayer() {
        this.player.push(new Player(this.ctx, this.canvasSize))
        console.log(this.player)
    },

    createHome() {
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 - this.canvasSize.row / 2, this.canvasSize.row * 2))
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 - 4 * this.canvasSize.row - this.canvasSize.row / 2, this.canvasSize.row * 2))
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 - 8 * this.canvasSize.row - this.canvasSize.row / 2, this.canvasSize.row * 2))
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 + 4 * this.canvasSize.row - this.canvasSize.row / 2, this.canvasSize.row * 2))
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 + 8 * this.canvasSize.row - this.canvasSize.row / 2, this.canvasSize.row * 2))
    },

    createCar() {
        this.cars.push(new Car(this.ctx, this.canvasSize, 0 - this.canvasSize.row, this.canvasSize.h - 5 * this.canvasSize.row, 20))
        this.cars.push(new Car(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 5, this.canvasSize.h - 5 * this.canvasSize.row, 20))
        this.cars.push(new Car(this.ctx, this.canvasSize, 0 - this.canvasSize.row, this.canvasSize.h - 3 * this.canvasSize.row, 20))
        this.cars.push(new Car(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 4 * this.canvasSize.row, -30))

    },

    createTrunk1() {
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 9 * this.canvasSize.row, 15, this.canvasSize.h / 4, this.canvasSize.row))
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 7 * this.canvasSize.row, 15, this.canvasSize.h / 4, this.canvasSize.row))

    },

    createTrunk2() {

        this.trunks.push(new Trunk(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 8 * this.canvasSize.row, -25, this.canvasSize.row, this.canvasSize.row))
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, this.canvasSize.w + this.canvasSize.row, this.canvasSize.h - 8 * this.canvasSize.row, -25, this.canvasSize.row, this.canvasSize.row))
    },

    clearCar() {
        this.cars = this.cars.filter(elem => elem.carPos.x <= 2 * this.canvasSize.w && elem.carPos.x >= -2 * this.canvasSize.w)
    },

    clearTrunk() {
        this.trunks = this.trunks.filter(elem => elem.trunkPos.x <= 2 * this.canvasSize.w && elem.trunkPos.x >= -2 * this.canvasSize.w)
    },

    isCollisions() {
        return this.cars.some(elem => {
            return (
                this.player.playerPos.x + this.player.playerSize.w >= elem.carPos.x &&
                this.player.playerPos.y + this.player.playerSize.h - 5 >= elem.carPos.y &&
                this.player.playerPos.x <= elem.carPos.x + elem.carSize.w &&
                this.player.playerPos.y + 2 <= elem.carPos.y + elem.carSize.h
            )

        })
    },
    //colisiones: no puede acceder a los valores de player porq ahora es un elemento de un array
    isTrunk() {

        for (let i = 0; i < this.trunks.length; i++) {

            if (this.player.playerPos.x + this.player.playerSize.w >= trunks[i].trunkPos.x &&
                this.player.playerPos.y + this.player.playerSize.h - 5 >= trunks[i].trunkPos.y &&
                this.player.playerPos.x <= trunks[i].trunkPos.x + trunks[i].trunkSize.w &&
                this.player.playerPos.y + 2 <= trunks[i].trunkPos.y + trunks[i].trunkSize.h) {
                return this.player.playerPos.x = trunks[i].trunkPos.x
            }
        }
    },

    isWater() {

        return this.player.some(elem => {
            return (
                elem.playerPos.x + elem.playerSize.w >= this.gameBoard.waterPos.x &&
                elem.playerPos.y + elem.playerSize.h - 5 >= this.gameBoard.waterPos.y &&
                elem.playerPos.x <= this.gameBoard.waterPos.x + this.gameBoard.waterSize.w &&
                elem.playerPos.y + 2 <= this.gameBoard.waterPos.y + this.gameBoard.waterSize.h
            )

        })

    },

    isHome() {
        return this.homes.some(elem => {
            return (
                this.player.playerPos.x + this.player.playerSize.w >= elem.homePos.x &&
                this.player.playerPos.y + this.player.playerSize.h - 5 >= elem.homePos.y &&
                this.player.playerPos.x <= elem.homePos.x + elem.homeSize.w &&
                this.player.playerPos.y + 2 <= elem.homePos.y + elem.homeSize.h
            )
        })
    }

    // gameOver() {
    //  if (this.collisions()) {
    //      this.reset()
    //  }
    //  }


}
