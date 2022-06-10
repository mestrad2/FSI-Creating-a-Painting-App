const painting = document.querySelector('.painting')

let selectedColor = 'blue'

let palette = document.querySelector('.palette')

palette.addEventListener('click', function(e) {
    if(e.target.id == "blue") {
        selectedColor = "blue"
    } else if (e.target.id == "red") {
        selectedColor = "red"
    } else if (e.target.id == "yellow") {
        selectedColor = "yellow"
    } else if (e.target.id = "green") {
        selectedColor = "green"
    }
})


painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = selectedColor
})
