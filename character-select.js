const charList = [
    {
        name: "nba jam",
        home: '"#char1"',
        imgfile: '"images/picture-choice-nba-jam.jpg"'
    },
    {
        name: "shin chan",
        home: '"#char2"',
        imgfile: '"images/picture-choice-shin-chan.png"'
    },
    {
        name: "funky",
        home: '"#char3"',
        imgfile: '"images/picture-choice-fk.png"'
    },
        {
        name: "pb crisps",
        home: '"#char4"',
        imgfile: '"images/picture-choice-pbcrisps.png"'
    }
]

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

document.querySelector("#char3").addEventListener("click", function (e) {
    document.querySelector("#box1").innerHTML = ''

    console.log(e.target, 'it worked')
    const makeImage = document.createElement("img")
    makeImage.classList.add('top-img')
    makeImage.src="images/picture-choice-fk.png"
    document.querySelector("#box1").appendChild(makeImage)
})

document.querySelector("#char4").addEventListener("click", function (e) {
    document.querySelector("#box1").innerHTML = ''

    console.log(e.target, 'it worked')
    const makeImage = document.createElement("img")
    makeImage.classList.add('top-img')
    makeImage.src="images/picture-choice-pbcrisps.png"
    document.querySelector("#box1").appendChild(makeImage)
})