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