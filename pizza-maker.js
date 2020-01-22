const ingredients = [

  ]
  
  
  const message = function (x) {
  
    document.querySelector('#welcome').innerHTML = ''
  
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

  document.querySelector('#button-all-done').addEventListener('click', function() {

    document.querySelectorAll('button, input').forEach(function(elem){
      elem.disabled = true;
    });
    const message = document.createElement("div");
    message.innerText = "Sit tight your pizza is on the way!";
    document.querySelector('.box3').appendChild(message);
  });
