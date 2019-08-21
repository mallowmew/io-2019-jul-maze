var showWinPopup = new CustomEvent(
    'showPopup', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.end-zone').addEventListener('mouseover', function () {
    $('.show-popup').show()
    $('.show-popup').load('./partials/popups.html', {}, function(responseText, textStatus, jqXHR) {
        document.querySelector('#pop-up-msg').textContent = "You win!"
    })
})

var showLosePopup = new CustomEvent(
    'showPopup', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.lose').addEventListener('mouseover', function () {
    $('.show-popup').show()
    $('.show-popup').load('./partials/popups.html', {}, function(responseText, textStatus, jqXHR) {
        $("#bone-img").attr({ "src": "images/lose-bone.svg" });
        $('.pop-up-background').css('background-color','#f9f871')
        document.querySelector('#pop-up-msg').textContent = "You lose!"
    })
})