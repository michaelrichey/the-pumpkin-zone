const test = document.createElement('p')
test.textContent = 'test'
document.querySelector("#picture-zone").appendChild(test)

document.querySelector("#dropdown").addEventListener('change', function (e) {
    console.log(e.target.value)
    if (e.target.value === 'funky') {
        console.log('its monkey')
        document.querySelector("#picture-zone").innerHTML = '<img src="images/picture-choice-fk.png">'
    } else if (e.target.value === 'tators') {
        console.log('its gator')
        document.querySelector("#picture-zone").innerHTML = '<img src="images/picture-choice-tators.jpg">'

    } else {
        console.log('something went wrong')
    }
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