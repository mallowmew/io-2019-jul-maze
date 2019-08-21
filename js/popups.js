
var showWinPopup = new CustomEvent(
    'showPopup', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.end-zone').addEventListener('mouseover', function () {
    document.dispatchEvent(showWinPopup)
    $('.game').load('./partials/popups.html')
})

var showLosePopup = new CustomEvent(
    'showPopup', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.lose').addEventListener('mouseover', function () {
    document.dispatchEvent(showLosePopup)
    $('.game').load('./partials/popups.html')
})

