var gameWin = new CustomEvent(
    'gameWin',
    {
        bubbles: false,
        cancelable: true,
    }
)

document.querySelector('#hind-container').addEventListener('mouseover', function () {
    document.dispatchEvent(gameWin)
    console.log('dsfsesef')
})