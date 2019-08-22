var gameStarted = false

$('.start-zone').each(function(index, starts) {
    starts.addEventListener('mouseover', function () {
        if (!gameStarted) {
            $('.lose').each( function(index, hitboxes) {
                hitboxes.addEventListener('mouseenter', loseGame)
            })
            $('.end-zone').on('mouseover', winGame)
            gameStarted = true;
        }
    })
})

function loseGame() {
    $('.show-popup').show().load('partials/popups.html', {}, function() {
        $("#bone-img").attr({ 
            "src": "images/lose-bone.svg", 
            "alt": "Lose popup background"
        });
        $('.pop-up-background').css('background-color','#f9f871')
        $('#pop-up-msg')
            .text("You lose!")
            .css('color', '#f9f871')
    })
}

function winGame() {
    $('.show-popup').show()
    $('.show-popup').load('partials/popups.html', {}, function () {
        $('#pop-up-msg').text("You win!")
    })
}

$(function() {
    function firstBrushLoop() {
        $('#first-brush')
            .animate({bottom: 250}, 1000)
            .animate({bottom: 150}, 1000, firstBrushLoop)
    }
    firstBrushLoop()
})

$(function() {
    function secondBrushLoop() {
        $('#second-brush')
            .animate({left: 380}, 1000)
            .animate({left: 550}, 200, secondBrushLoop)
    }
    secondBrushLoop()
})

$(function() {
    function thirdBrushLoop() {
        $('#third-brush')
            .animate({right: 350}, 400)
            .animate({right: 290}, 400, thirdBrushLoop)
    }
    thirdBrushLoop()
})