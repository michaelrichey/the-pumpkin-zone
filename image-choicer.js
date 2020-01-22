const picList = [
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
            console.log('if statement ' + item.value)
            console.log('if statement ' + item.filename)
            document.querySelector("#picture-zone").innerHTML = `<img src="images/${item.filename}">`
        } else {
            console.log('something went wrong')
        }
    })

    getPic(picList)

})

let getPic = picList.forEach(function (item) {
    if ('contra' === item.value) {
        document.querySelector("#picture-zone").innerHTML = `<img id="blank-image" src="images/${item.filename}">`
    } else {
        console.log('something went wrong')
    }
})

getPic(picList)



// Next: can we make a forEach that will loop through the array and create the dropdown? Now I don't have to make 50 if statements, but I still need to go through and make each dropdown with id and all that. Maybe we can autogen that too.

// Design-wise, let's get some padding and spacing. Arrange elements in divs, spacing around divs. Center the images (maybe in a frame?), get some animated backgrounds.