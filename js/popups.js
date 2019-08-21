

$(document).on('gameWin', function() {
    $('.show-popup').show()
    $('.show-popup').load('./partials/popups.html', {}, function (responseText, textStatus, jqXHR) {
        $('#pop-up-msg').text("You win!")
    })
})

$(document).on('gameLose', function() {
    $('.show-popup').show()
    $('.show-popup').load('./partials/popups.html', {}, function(responseText, textStatus, jqXHR) {
        $("#bone-img").attr({ "src": "images/lose-bone.svg" });
        $('.pop-up-background').css('background-color','#f9f871')
        $('#pop-up-msg').text("You lose!")
    })
})