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
        h: undefined,
        row: undefined
    },
    framesIndex: 0,
    homes: [],
    cars: [],
    trunks: [],
    playerCount: 0,


    init() {

        this.setDimensions()
        this.setContext()
        this.createHome()
        this.start()
        this.isNextLevel()

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
            this.isNextLevel()
            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 120 === 0) this.createCar()
            if (this.framesIndex % 150 === 0) this.createTrunk1()
            if (this.framesIndex % 60 === 0) this.createTrunk2()

            this.clearCar()
            this.clearTrunk()
            this.isRiver()

            if (this.isCollisions()) { this.reset() }

            if (this.isHome()) {
                console.log("colision con la casitaaaa")
                this.playerCount++
                this.player.playerPos.x = this.player.playerPosInicial.x
                this.player.playerPos.y = this.player.playerPosInicial.y
            }

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
        this.player.draw()
    },

    reset() {
        this.gameBoard = new Gameboard(this.ctx, this.canvasSize)

        this.player = new Player(this.ctx, this.canvasSize, this.canvasSize.w / 2 - this.canvasSize.row / 2, this.canvasSize.h - 2 * this.canvasSize.row, 0)
        this.cars = []
        this.trunks = []

        alert('Push to Start')
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
        this.cars.push(new Car(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 4 * this.canvasSize.row, -35))
    },

    createTrunk1() {
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 9 * this.canvasSize.row, 20, this.canvasSize.h / 4, this.canvasSize.row))
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 7 * this.canvasSize.row, 20, this.canvasSize.h / 4, this.canvasSize.row))
    },

    createTrunk2() {
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 8 * this.canvasSize.row, -30, this.canvasSize.row, this.canvasSize.row))
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, this.canvasSize.w + this.canvasSize.row, this.canvasSize.h - 8 * this.canvasSize.row, -30, this.canvasSize.row, this.canvasSize.row))
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

    isRiver() {
        let isWater = false
        if (
            this.player.playerPos.x + this.player.playerSize.w >= this.gameBoard.waterPos.x &&
            this.player.playerPos.y + this.player.playerSize.h - 5 >= this.gameBoard.waterPos.y &&
            this.player.playerPos.x <= this.gameBoard.waterPos.x + this.gameBoard.waterSize.w &&
            this.player.playerPos.y + 2 <= this.gameBoard.waterPos.y + this.gameBoard.waterSize.h
        ) {
            isWater = true
        }
        let currentTrunk = undefined
        let isTrunk = false
        this.trunks.forEach(elem => {
            if (this.player.playerPos.x + this.player.playerSize.w >= elem.trunkPos.x &&
                this.player.playerPos.y + this.player.playerSize.h - 5 >= elem.trunkPos.y &&
                this.player.playerPos.x <= elem.trunkPos.x + elem.trunkSize.w &&
                this.player.playerPos.y + 2 <= elem.trunkPos.y + elem.trunkSize.h) {
                currentTrunk = this.trunks.indexOf(elem)
                isTrunk = true
            }
        })

        if (isWater && isTrunk) {
            console.log('doble check')
            if (this.trunks[currentTrunk].trunkPos.x < this.canvasSize.w - this.canvasSize.row && this.trunks[currentTrunk].trunkPos.x > 0) {
                this.player.playerPos.x = this.trunks[currentTrunk].trunkPos.x
            }
        } else if (isWater) {
            console.log('whatter check')
            this.reset()
        }
    },

    isHome() {
        return this.homes.some(elem => {
            return (
                this.player.playerPos.y <= elem.homePos.y + elem.homeSize.h //&&
                //this.player.playerPos.x === elem.homePos.x
            )
        })
    },

    isNextLevel() {
        if (this.playerCount === 5) {
            this.playerCount = 0
            setTimeout(() => {
                alert('Next Level')
            }, 500)
        }
    }

}
