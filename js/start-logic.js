var gameStart = new CustomEvent(
    'gameStart', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.start-zone').addEventListener('mouseover', function () {
    document.dispatchEvent(gameStart)
})