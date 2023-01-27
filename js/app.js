const game = {
    title: 'Our Froggy :)',
    authors: 'Miguel Ferragut, Gimena Motto',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,


    canvasSize: {
        w: undefined,
        h: undefined
    },

    keys: {
        UP: undefined,//
        DOWN: undefined, //
        LEFT: undefined, //
        RIGHT: undefined, //
    },

    init() {
        this.setDimensions()
        this.setContext()
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

        }, 10)
    },

    //evenlisteners

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {

    }


}