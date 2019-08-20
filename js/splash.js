$(document).ready(function () {
    $('#play-button').on('click', function () {
        $('.splash').remove()
        $('.container').load('./partials/game.html')
        console.log('New page loaded')
    })
})

