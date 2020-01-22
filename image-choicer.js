const picList = [
    {
        filename: 'picture-choice-fk.png',
        id: 'funky'
    },
    {
        filename: 'picture-choice-tators.jpg',
        id: 'tators'
    },
    {
        filename: 'picture-choice-contra.png',
        id: 'contra'
    },
    {
        filename: 'picture-choice-ffix.png',
        id: 'ffix'
    },
    {
        filename: 'picture-choice-nba-jam.jpg',
        id: 'nba'
    },
    {
        filename: 'picture-choice-pbcrisps.png',
        id: 'pb'
    },
    {
        filename: 'picture-choice-pepsi.jpg',
        id: 'pepsi'
    },
]

document.querySelector("#dropdown").addEventListener('change', function (e) {
    console.log(e.target.value)

    let getPic = picList.forEach(function (item) {
        if (e.target.value === item.id) {
            console.log('if statement ' + item.id)
            console.log('if statement ' + item.filename)
            document.querySelector("#picture-zone").innerHTML = `<img src="images/${item.filename}">`
        } else {
            console.log('something went wrong')
        }
    })

    getPic(picList)


})

// Next: can we make a forEach that will loop through the array and create the dropdown? Now I don't have to make 50 if statements, but I still need to go through and make each dropdown with id and all that. Maybe we can autogen that too.

// Design-wise, let's get some padding and spacing. Arrange elements in divs, spacing around divs. Center the images (maybe in a frame?), get some animated backgrounds.