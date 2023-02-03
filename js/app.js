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
    counterImages: [],
    livesImages: [],
    lives: 3,
    interval: undefined,
    fps: 100,

    gameover: undefined,
    score: 0,
    win: undefined,
    audio: new Audio('./audio/ost.mp3'),
    lostlive: new Audio('./audio/lost-live.mp3'),
    good: new Audio('./audio/good.mp3'),
    success: new Audio('./audio/success.mp3'),
    winning: new Audio('./audio/winning.mp3'),
    experiment: undefined,


    init() {
        this.setDimensions()
        this.setContext()
        this.loadImages()
        this.createLives()
        this.createHome()
        this.createCounter()
        this.start()
    },

    loadImages() {
        this.win = new Image()
        this.win.src = ("./images/ratcounter.png")
        this.gameover = new Image()
        this.gameover.src = ("./images/ratcounter.png")
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
        this.interval = setInterval(() => {

            this.clearAll()
            this.drawAll()
            this.framesIndex++

            if (this.framesIndex % 160 === 0) this.createCar1()
            if (this.framesIndex % 90 === 0) this.createCar2()
            if (this.framesIndex % 200 === 0) this.createTrunk1()
            if (this.framesIndex % 100 === 0) this.createTrunk2()

            this.clearCar()
            this.clearTrunk()
            this.isRiver()

            if (this.isCollisions()) {
                this.player.playerPos.x = this.player.playerPosInicial.x
                this.player.playerPos.y = this.player.playerPosInicial.y
                this.lives -= 1
                this.lostlive.play()
                this.livesImages.pop()
            }
            if (this.lives === 0) { this.isGameOver() }
            if (this.playerCount === 5) {
                this.winning.play()
                this.isWin()
            }

            if (this.isScore()) {
                this.success.play()
                this.score += 200
            }

            if (this.isHome()) {
                this.good.play()
                this.playerCount++
                this.player.playerPos.x = this.player.playerPosInicial.x
                this.player.playerPos.y = this.player.playerPosInicial.y
            }

        }, 1000 / this.fps)
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
        this.livesImages.forEach(elem => elem.draw())
        this.drawCounter()
        this.drawScore()
        this.drawTextLives()
    },

    drawCounter() {
        if (this.playerCount === 1) {
            this.counterImages[0].draw()
        }
        if (this.playerCount === 2) {
            this.counterImages[0].draw()
            this.counterImages[1].draw()
        }
        if (this.playerCount === 3) {
            this.counterImages[0].draw()
            this.counterImages[1].draw()
            this.counterImages[2].draw()
        }
        if (this.playerCount === 4) {
            this.counterImages[0].draw()
            this.counterImages[1].draw()
            this.counterImages[2].draw()
            this.counterImages[3].draw()
        }
        if (this.playerCount === 5) {
            this.counterImages[0].draw()
            this.counterImages[1].draw()
            this.counterImages[2].draw()
            this.counterImages[3].draw()
            this.counterImages[4].draw()
        }
    },


    reset() {
        this.gameBoard = new Gameboard(this.ctx, this.canvasSize)

        this.player = new Player(this.ctx, this.canvasSize, this.canvasSize.w / 2 - this.canvasSize.row / 2, this.canvasSize.h - 2 * this.canvasSize.row, 0)
        this.cars = []
        this.trunks = []
        this.playerCount = 0
        this.lives = 3
    },

    drawTextLives() {
        this.ctx.fillStyle = "black"
        this.ctx.font = "bold 50px 'VT323'"
        this.ctx.fillText('LIVES:', this.canvasSize.row, 11 * this.canvasSize.row + 55)
    },

    drawScore() {
        this.ctx.fillStyle = "black"
        this.ctx.font = "bold 50px 'VT323'"
        this.ctx.fillText(`SCORE: ${this.score} `, this.canvasSize.w / 1.4, 50)
    },

    createLives() {
        this.livesImages.push(new Counter(this.ctx, this.canvasSize, this.canvasSize.row * 4, 11 * this.canvasSize.row + 5))
        this.livesImages.push(new Counter(this.ctx, this.canvasSize, this.canvasSize.row * 6, 11 * this.canvasSize.row + 5))
        this.livesImages.push(new Counter(this.ctx, this.canvasSize, this.canvasSize.row * 8, 11 * this.canvasSize.row + 5))
    },

    createCounter() {
        this.counterImages.push(new Counter(this.ctx, this.canvasSize, this.canvasSize.row, 5))
        this.counterImages.push(new Counter(this.ctx, this.canvasSize, this.canvasSize.row * 3, 5))
        this.counterImages.push(new Counter(this.ctx, this.canvasSize, this.canvasSize.row * 5, 5))
        this.counterImages.push(new Counter(this.ctx, this.canvasSize, this.canvasSize.row * 7, 5))
        this.counterImages.push(new Counter(this.ctx, this.canvasSize, this.canvasSize.row * 9, 5))
    },

    createHome() {
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 - this.canvasSize.row / 2, this.canvasSize.row * 2))
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 - 4 * this.canvasSize.row - this.canvasSize.row / 2, this.canvasSize.row * 2))
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 - 8 * this.canvasSize.row - this.canvasSize.row / 2, this.canvasSize.row * 2))
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 + 4 * this.canvasSize.row - this.canvasSize.row / 2, this.canvasSize.row * 2))
        this.homes.push(new Home(this.ctx, this.canvasSize, this.canvasSize.w / 2 + 8 * this.canvasSize.row - this.canvasSize.row / 2, this.canvasSize.row * 2))
    },

    createCar1() {
        this.cars.push(new Car(this.ctx, this.canvasSize, 0 - 5 * this.canvasSize.row, this.canvasSize.h - 5 * this.canvasSize.row, 4))
        this.cars.push(new Car(this.ctx, this.canvasSize, 0 - this.canvasSize.row, this.canvasSize.h - 3 * this.canvasSize.row, 4))

    },

    createCar2() {
        this.cars.push(new Car(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 4 * this.canvasSize.row, -9))
    },

    createTrunk1() {
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4, this.canvasSize.h - 9 * this.canvasSize.row, 3, this.canvasSize.row, this.canvasSize.row))
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 4 + 2 * this.canvasSize.row, this.canvasSize.h - 9 * this.canvasSize.row, 3, this.canvasSize.row, this.canvasSize.row))

        this.trunks.push(new Trunk(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 1.5, this.canvasSize.h - 7 * this.canvasSize.row, 3, this.canvasSize.row, this.canvasSize.row))
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, 0 - this.canvasSize.h / 1.5 + 2 * this.canvasSize.row, this.canvasSize.h - 7 * this.canvasSize.row, 3, this.canvasSize.row, this.canvasSize.row))

    },

    createTrunk2() {
        this.trunks.push(new Trunk(this.ctx, this.canvasSize, this.canvasSize.w, this.canvasSize.h - 8 * this.canvasSize.row, -4, this.canvasSize.row, this.canvasSize.row))
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

            if (this.trunks[currentTrunk].trunkPos.x < this.canvasSize.w - this.canvasSize.row && this.trunks[currentTrunk].trunkPos.x > 0) {
                this.player.playerPos.x = this.trunks[currentTrunk].trunkPos.x
            }
        } else if (isWater) {

            this.player.playerPos.x = this.player.playerPosInicial.x
            this.player.playerPos.y = this.player.playerPosInicial.y
            this.lives -= 1
            this.lostlive.play()
            this.livesImages.pop()
        }
    },

    isHome() {
        return this.homes.some(elem => {
            return (
                this.player.playerPos.y <= elem.homePos.y + elem.homeSize.h
            )
        })
    },

    isScore() {
        return this.homes.some(elem => {
            return (
                this.player.playerPos.x + this.player.playerSize.w >= elem.homePos.x &&
                this.player.playerPos.x <= elem.homePos.x + elem.homeSize.w &&
                this.player.playerPos.y <= elem.homePos.y + elem.homeSize.h
            )
        })
    },

    isWin() {

        clearInterval(this.interval)
        this.ctx.fillStyle = '#F7AAFA'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.drawImage(this.win, this.canvasSize.row, this.canvasSize.row * 3, this.canvasSize.w / 2, this.canvasSize.h / 1.5)

        this.ctx.fillStyle = "black"
        this.ctx.font = "bold 150px 'VT323'"
        this.ctx.fillText('YOU WIN', this.canvasSize.w / 2, 6 * this.canvasSize.row)
    },

    isGameOver() {
        this.audio.pause()
        clearInterval(this.interval)

        this.ctx.fillStyle = '#CC2204'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.drawImage(this.gameover, this.canvasSize.row, this.canvasSize.row * 3, this.canvasSize.w / 2, this.canvasSize.h / 1.5)

        this.ctx.fillStyle = "black"
        this.ctx.font = "bold 150px 'VT323'"
        this.ctx.fillText('GAME OVER', this.canvasSize.w / 2, 6 * this.canvasSize.row)
    }

}