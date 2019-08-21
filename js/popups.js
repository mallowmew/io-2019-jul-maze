
var showPopup = new CustomEvent(
    'showPopup', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.getElementById('hind-img').addEventListener('mouseover', function () {
    document.dispatchEvent(showPopup)
    //$('.popup-container').load('./partials/popups.html')
    console.log('!')
})

