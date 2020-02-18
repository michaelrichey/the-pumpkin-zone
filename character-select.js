console.log('hello there, butt')

document.querySelector("#char1").addEventListener("click", function (e) {
    document.querySelector("#box1").innerHTML = ''

    console.log(e.target, 'it worked')
    const makeImage = document.createElement("img")
    makeImage.classList.add('top-img')
    makeImage.src="images/picture-choice-nba-jam.jpg"
    document.querySelector("#box1").appendChild(makeImage)
})

document.querySelector("#char2").addEventListener("click", function (e) {
    document.querySelector("#box1").innerHTML = ''

    console.log(e.target, 'it worked')
    const makeImage = document.createElement("img")
    makeImage.classList.add('top-img')
    makeImage.src="images/picture-choice-shin-chan.png"
    document.querySelector("#box1").appendChild(makeImage)
})