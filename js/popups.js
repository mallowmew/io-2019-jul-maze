
var showPopup = new CustomEvent(
    'showPopup', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.end-zone').addEventListener('mouseover', function () {
    document.dispatchEvent(showPopup)
    $('.game').load('./partials/popups.html')
})

