var lose = new CustomEvent(
    'lose', {
        bubbles: false,
        cancelable: true,
    }
)

document.querySelector('.lose').addEventListener('mouseenter', function(){
    document.querySelector('.test').innerHTML = "pleasework"
})