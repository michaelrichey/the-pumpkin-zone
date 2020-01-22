const picList = [
    {
        filename: 'picture-choice-fk.png',
        id: 'funky'
    },
    {
        filename: 'picture-choice-tators.jpg',
        id: 'tators'
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

// Can this be done with an array somehow? If we want to add 50 pictures, we need 50 if statements. Can we forEach over an array in some way to make this work? But then how can the event listener get the dropdown id? Add dropdown id to array. If e.target.value === object.id, then it adds innerHTML that grabs the img filename from the same spot in the array. Uuuh... how do I do that?

/*
if (e.target.value === object.id) {
    document.querySelector("#picture-zone").innerHTML = `<img src="images/${object.img}">`
} else {
    console.log('something went wrong')
}

*/

// But I still need some way for code to grab an image associated with a specific object in the array...