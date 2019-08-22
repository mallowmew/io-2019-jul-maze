var gameStarted = false

$('.start-zone').each(function (index, starts) {
    starts.addEventListener('mouseover', function () {
        if (!gameStarted) {
            $('.lose').each(function (index, hitboxes) {
                hitboxes.addEventListener('mouseenter', loseGame)
            })
            $('.end-zone').on('mouseover', winGame)
            $('#twelfth-section').on('mouseover', moveTail)
            gameStarted = true;
        }
    })
})

function loseGame() {
    $('.show-popup').show().load('partials/popups.html', {}, function () {
        $("#bone-img").attr({
            "src": "images/lose-bone.svg",
            "alt": "Lose popup background"
        })
        $('.pop-up-background').css('background-color', '#f9f871')
        $('#pop-up-msg')
            .text("You lose!")
            .css('color', '#f9f871')
    })
}

function winGame() {
    $('.show-popup').show().load('partials/popups.html', {}, function () {
        $('#pop-up-msg').text("You win!")
    })
}

function moveTail() {
    $('#tail').css('animation-play-state', 'running')
    $('#tail').css('-webkit-animation-play-state', 'running')
}