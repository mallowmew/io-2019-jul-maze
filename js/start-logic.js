var gameStart = new CustomEvent(
    'gameStart', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('#head-img').addEventListener('mouseover', function () {
    document.dispatchEvent(gameStart)
})