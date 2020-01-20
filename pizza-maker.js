const ingredients = [
    {
      name: 'wine',
      price: '13'
    },
    {
      name: 'brine',
      price: '50'
    },
    {
      name: 'swine',
      price: '200'
    },
    {
      name: 'Kevin Kline',
      price: '98'
    }
  ]
  
  
  const message = function (x) {
  
    document.querySelector('#welcome').innerHTML = '<button id="submit-toppings">SUBMIT ORDER</button>'
  
    x.forEach(function (item) {
      const generateText = document.createElement('p')
      generateText.innerText = `You have added: ${item.name}`
      document.querySelector("#welcome").appendChild(generateText)
    })
  }
  
  message(ingredients)
  
  document.querySelector("#form").addEventListener('submit', function (e) {
    e.preventDefault()
    ingredients.push(
      {
        name: e.target.elements.toppings.value,
        price: 'asdf'
      },
    )
    console.log(ingredients)
    e.target.elements.toppings.value = ''
    message(ingredients)
  })
  
  document.querySelector("#submit-toppings").addEventListener("click", function (e) {
    const finalOrder = document.createElement('p')
    finalOrder.textContent = 'Your final pizza will have on top of it:'
    document.querySelector('.box3').appendChild(finalOrder)
  
    ingredients.forEach(function (item) {
      const toppingsList = document.createElement('p')
      toppingsList.textContent = item.name
      document.querySelector(".box3").appendChild(toppingsList)
    })
    console.log(ingredients)
  })
