const picList = [
    {
        filename: 'picture-choice-contra.png',
        value: 'blank',
        text: ''
    },
    {
        filename: 'picture-choice-fk.png',
        value: 'funky',
        text: 'Funky Kong'
    },
    {
        filename: 'picture-choice-tators.jpg',
        value: 'tators',
        text: 'Crunch Tators'
    },
    {
        filename: 'picture-choice-contra.png',
        value: 'contra',
        text: 'Contra Hard Corps on Sega Genesis'
    },
    {
        filename: 'picture-choice-ffix.png',
        value: 'ffix',
        text: 'Vivi fallen down in the street'
    },
    {
        filename: 'picture-choice-nba-jam.jpg',
        value: 'nba',
        text: 'NBA Jam for Game Boy Box Back'
    },
    {
        filename: 'picture-choice-pbcrisps.png',
        value: 'pb',
        text: 'PB Crisps by Planters'
    },
    {
        filename: 'picture-choice-pepsi.jpg',
        value: 'pepsi',
        text: 'Pepsi Cool Cans 1990'
    },
    {
        filename: 'picture-choice-train.jpg',
        value: 'train',
        text: 'An Exquisite Train'
    },
    {
        filename: 'picture-choice-hikonyan.jpg',
        value: 'hikonyan',
        text: 'Hikonyan'
    },
    {
        filename: 'picture-choice-taco-bell.jpeg',
        value: 'tacobell',
        text: 'Taco Bell Box Flying Through the Desert'
    },
    {
        filename: 'picture-choice-shin-chan.png',
        value: 'shinchanbento',
        text: 'Crayon Shin-chan Bento'
    },
]

picList.forEach(function (item) {

    const generateOptions = document.createElement('option')
    const setVal = document.createAttribute('value')
    setVal.value = item.value
    generateOptions.setAttributeNode(setVal)
    generateOptions.innerHTML = item.text
    document.querySelector("#dropdown").appendChild(generateOptions)

})

document.querySelector("#dropdown").addEventListener('change', function (e) {
    console.log(e.target.value)

    let getPic = picList.forEach(function (item) {
        if (e.target.value === item.value) {
            document.querySelector("#picture-zone").innerHTML = `<img src="images/${item.filename}">`
        } else if (e.target.value === 'blank') {
            document.querySelector("#picture-zone").innerHTML = `<img id="blank-image" src="images/${item.filename}">`
        } else {
            console.log('something went wrong')
        }
    })

    getPic(picList)

})

let getPic = picList.forEach(function (item) {
    if (item.value === 'blank') {
        document.querySelector("#picture-zone").innerHTML = `<img id="blank-image" src="images/${item.filename}">`
    } else {
        console.log('something went wrong')
    }
})

getPic(picList)

