var cartItems = []
var container = document.getElementById('container')

getItemsFromLocalStorage()

function getItemsFromLocalStorage() {
  var item = localStorage.getItem('cartItems')
  console.log('item from local storge=>', item)
  if (item) {
      item = JSON.parse(item)
      console.log('item from JSON.parse=>', item)

      cartItems = item
      cart.innerText = `Cart (${item.length})`
  }

  var item2 = localStorage.getItem('FavoriteItems')
  console.log('item from local storge=>', item2)
  if (item2) {
      item2 = JSON.parse(item2)
      console.log('item from JSON.parse=>', item2)

      FavoriteItems = item2
      favorite.innerText = `favorite  (${item2.length})`
  }
}

for (var i = 0; i < cartItems.length; i++) {
    var foodObj = cartItems[i]
    var card = `<div class='cartCard'">
      
      <div class = "cartBoxes">
        <div >
        <h5 class="card-title">${foodObj.title}</h5>
        <p class="card-text">
        ${foodObj.description}
        </p>
        </div>

        <div >
            <button style="border-radius:10px;"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    </div>
  </div>`

    container.innerHTML += card
}

function clearCart() {
    cartItems = []
    localStorage.removeItem("cartItems")
    cart.innerText = `Cart`
    container.innerHTML = ''
}


console.log(cartItems)