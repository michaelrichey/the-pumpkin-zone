console.log('hello there, butt')

document.querySelector("#char1").addEventListener("click", function (e) {
    console.log(e.target, 'it worked')
    const makeImage = document.createElement("img")
    makeImage.classList.add('top-img')
    makeImage.src="images/picture-choice-nba-jam.jpg"
    document.querySelector("#box1").appendChild(makeImage)
})