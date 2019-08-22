var gameStarted = false

$('.start-zone').each(function (index, startZone) {
    startZone.addEventListener('mouseover', function () {
        if (!gameStarted) {
            // $('.lose').each(function (index, hitboxes) {
            //     hitboxes.addEventListener('mouseenter', loseGame)
            // })
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
        $('.pop-up-container').css('background-color', '#f9f871')
        $('#pop-up-msg')
            .text("You lose!")
            .css('color', '#f9f871')
        applyReset()
    })
    stopBrushes()
}

function winGame() {
    $('.show-popup').show().load('partials/popups.html', {}, function () {
        $('#pop-up-msg').text("You win!")
        applyReset()
    })
    stopBrushes()
}

function moveTail() {
    $('#tail').css('animation-play-state', 'running')
    $('#tail').css('-webkit-animation-play-state', 'running')
}

function stopBrushes() {
    $('#second-brush').hide()
}

function resetGame() {
    $('container').load('partial/splash.html')
}

function applyReset() {
    $('#reset-button').on('click', resetGame)
}