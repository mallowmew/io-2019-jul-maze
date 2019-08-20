var winEvent = new CustomEvent(
    'winEvent',
    {
        bubbles: true,
        cancelable: true,
    }
)

$('#hind-container').on('mouseover', function () {
    $('#hind-container').trigger('winEvent')
    console.log('dsfsesef')
})


