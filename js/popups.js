
var showWinPopup = new CustomEvent(
    'showPopup', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.end-zone').addEventListener('mouseover', function () {
    $('.game').load('./partials/popups.html', {}, function(responseText, textStatus, jqXHR) {
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
    $('.game').load('./partials/popups.html', {}, function(responseText, textStatus, jqXHR) {
        $("#pop-up img").attr({ "src": "images/lose-bone.svg" });
        document.querySelector('#pop-up-msg').textContent = "You lose!"
    })
})


