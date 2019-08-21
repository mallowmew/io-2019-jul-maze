var gameStart = new CustomEvent(
    'gameStart', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

var gameLose = new CustomEvent(
    'lose', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

var gameWin = new CustomEvent(
    'gameWin', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.start-zone').addEventListener('mouseover', function () {
    document.dispatchEvent(gameStart)
    console.log('Start!')
})

document.querySelector('.lose').addEventListener('mouseenter', function(){
    document.dispatchEvent(gameLose)
    console.log('You lose!')
})

document.querySelector('.end-zone').addEventListener('mouseover', function () {
    document.dispatchEvent(gameWin)
    console.log('You win!')
})