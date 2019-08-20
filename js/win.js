var winEvent = new CustomEvent(
    'winEvent',
    {
        bubbles: true,
        cancelable: true,
    }
)

document.querySelector('#hind-container').addEventListener('mouseover', function () {
    document.dispatchEvent(winEvent)
    console.log('dsfsesef')
})


