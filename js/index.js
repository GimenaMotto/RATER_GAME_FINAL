const div = document.querySelector('div')
const h1 = document.querySelector('h1')
const canvas = document.querySelector('canvas')

div.addEventListener('click', () => {
    game.audio.play()
    canvas.classList.remove('d-none')
    div.classList.add('d-none')
})

game.init()