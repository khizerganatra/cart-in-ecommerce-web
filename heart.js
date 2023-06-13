var FavoriteItems = []
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
        favorite.innerText = `favorite (${item2.length})`
    }
}

for (var i = 0; i < FavoriteItems.length; i++) {
    var foodObj = FavoriteItems[i]
    var card = `<div class='cartCard'">
      <div class="favorateBoxes">
        <div>
            <h5 class="card-title">${foodObj.title}</h5>
            <p class="card-text">
            ${foodObj.description}
            </p>
        </div>

        <div >
            <button style="border-radius:100%; background-color:red;"><i style="color:white;" class="fa-regular fa-heart"></i></button>
        </div>
      </div>
    </div>
  </div>`

    container.innerHTML += card
}

function clearCart() {
    FavoriteItems = []
    localStorage.removeItem("FavoriteItems")
    favorite.innerText = `favorite`
    container.innerHTML = ''
}


console.log(FavoriteItems)