var winEvent = new CustomEvent(
    'winEvent',
    {
        bubbles: true,
        cancelable: true,
    }
)

$('.endzone').on('mouseover', function () {
    $('.end-zone').trigger('winEvent')
    console.log('dsfsesef')
})


