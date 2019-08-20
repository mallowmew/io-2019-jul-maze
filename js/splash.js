$(document).ready(function () {
    document.getElementById('play-button').addEventListener('click', function () {
        $('.splash').remove()
        $('.container').load('./partials/game.html')
        console.log('New page loaded')
})
})

