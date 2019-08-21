var gameStart = new CustomEvent(
    'gameStart', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

var gameLose = new CustomEvent(
    'gameLose', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

var gameWin = new CustomEvent(
    'gameWin', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelectorAll('.start-zone').forEach(function(starts) {
    starts.addEventListener('mouseover', function () {
        document.dispatchEvent(gameStart)
        console.log('Start!')
    })
})

document.addEventListener('gameStart', function() {
    document.querySelectorAll('.lose').forEach(function(hitboxes) {
        //console.log('Adding event to ' + hitboxes)
        hitboxes.addEventListener('mouseenter', function() {
            document.dispatchEvent(gameLose)
            console.log('You lose!')
        })
    })
}) 

document.addEventListener('gameStart', function() {
    document.querySelector('.end-zone').addEventListener('mouseover', function () {
        document.dispatchEvent(gameWin)
        console.log('You win!')
    })
})

$(function(){
    function firstBrushLoop(){
     $('#first-brush')
         .animate({bottom: 250}, 1000)
         .animate({bottom: 150}, 1000, firstBrushLoop)
    }
    firstBrushLoop()
})

$(function(){
    function secondBrushLoop(){
        $('#second-brush')
            .animate({left: 380}, 1000)
            .animate({left: 550}, 200, secondBrushLoop)
    }
    secondBrushLoop()
})

$(function(){
    function thirdBrushLoop(){
        $('#third-brush')
            .animate({right: 350}, 400)
            .animate({right: 290}, 400, thirdBrushLoop)
    }
    thirdBrushLoop()
})

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