// var addbtn = document.getElementById("Add");
// var changeTxtColor = document.getElementById("ChngTxtClr");
// var container = document.getElementById("mainDiv")

// addbtn.addEventListener("click",addbox);
// changeTxtColor.addEventListener("click",changeColor)

// function addbox(){

//     var div = document.createElement("div");
//     div.className = "box"
//     container.appendChild(div)

//     var heading = document.createElement("h3");
//     h3.innerText = "ABCD"
    
//     div.appendChild(heading)
    
    

// }

// function changeColor(){
    
    

// }

// ------------------

// var addbtn = document.getElementById("Add");

// var inputTODO = document.getElementById("todoInput");

// var ULlist = document.getElementById("listUl");

// addbtn.addEventListener("click", addlistitem)

// function addlistitem(){
    
//     var inputTxt = inputTODO.value;
//     var li = document.createElement("li");
    
//     if(inputTxt==""){

//         alert("Can't enter empty list");

//     }else{

//         li.innerHTML = inputTxt;
//         ULlist.appendChild(li);
//         inputTODO.value ='';
//         var delbtn = document.createElement("button");
//         delbtn.innerHTML = "delete"


//         li.appendChild(delbtn);

//     }

    
    

    
// }
// ------------------
const foodItems = [
    {
        foodName: "Burger",
        foodImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 9.99,
        description: "Delicious burger with all the fixings."
    },
    {
        foodName: "Pizza",
        foodImage: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 12.99,
        description: "Cheesy pizza with your favorite toppings."
    },
    {
        foodName: "Sushi",
        foodImage: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 15.99,
        description: "Fresh and flavorful sushi rolls."
    },
    {
        foodName: "Pasta",
        foodImage: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 10.99,
        description: "Classic pasta dish with your choice of sauce."
    },
    {
        foodName: "Salad",
        foodImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 8.99,
        description: "Fresh and healthy salad with a variety of ingredients."
    },
    {
        foodName: "Biryani",
        foodImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 200,
        description: "Fresh and healthy salad with a variety of ingredients."
    },
    {
        foodName: "Raita",
        foodImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 5,
        description: "Fresh and healthy salad with a variety of ingredients."
    },
];
var container = document.getElementById('foodItemsContainer')
var cart = document.getElementById('cart')
var favorite = document.getElementById('favorite')

var cartItems = []
var FavoriteItems =[];
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




for (var i = 0; i < foodItems.length; i++) {
    var foodObj = foodItems[i]
    var card = `<div data-aos="fade-up" class="col-12 col-md-6 col-lg-4 col-xl-3 my-2">
    <div class="card" style="width: 18rem">
      <img
        src=${foodObj.foodImage}
        class="card-img-top img-style"
        alt="..."
      />
      <div  class="card-body">
        <h5 class="card-title">${foodObj.foodName}</h5>
        <p class="card-text">
        ${foodObj.description}
        </p>
        <div class=" btn-box">

            <button onclick= "addToCart(this)" class="btn btn-primary">Add to Cart</button>

            <button onclick= "addToFavorite(this)"  class ="btn2 heart-btn">
            <i class="fa-regular fa-heart"></i>
            </button>

        </div>
      </div>
    </div>
  </div>`

    container.innerHTML += card
    
}


function addToCart(btn) {
    
    
    var childDiv = btn.parentNode
    console.log(childDiv)
    var title = childDiv.parentNode.children[0].innerText
    console.log(title)
    var description = childDiv.parentNode.children[1].innerText

    var obj = {
        title: title,
        description: description
    }

    cartItems.push(obj)
    cart.innerText = `Cart (${cartItems.length})`

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

function addToFavorite(btn2) {
    
    
    var childDiv = btn2.parentNode
    console.log(childDiv)
    var title = childDiv.parentNode.children[0].innerText
    console.log(title)
    var description = childDiv.parentNode.children[1].innerText

    var obj = {
        title: title,
        description: description
    }

    FavoriteItems.push(obj)
    favorite.innerText = `Favorite (${FavoriteItems.length})`

    localStorage.setItem('FavoriteItems', JSON.stringify(FavoriteItems))

    
    

}