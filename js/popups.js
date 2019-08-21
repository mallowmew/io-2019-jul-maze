$(document).on('gameWin', function() {
    $('.show-popup').show()
    $('.show-popup').load('./partials/popups.html', {}, function () {
        $('#pop-up-msg').text("You win!")
    })
})

$(document).on('gameLose', function() {
    $('.show-popup').show()
    $('.show-popup').load('./partials/popups.html', {}, function() {
        $("#bone-img").attr({ "src": "images/lose-bone.svg", 
                            "alt": "Lose popup background"});
        $('.pop-up-background').css('background-color','#f9f871')
        $('#pop-up-msg').text("You lose!")
    })
})