let openCart = document.querySelector('#cart_button');
let closeCart = document.querySelector('#closeCart');
let cardlist = document.querySelector('.card-list');
let body = document.querySelector('body');
let list = document.querySelector('.list');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openCart.addEventListener('click', function(){
    body.classList.add('active');
});
closeCart.addEventListener('click', function(){
    body.classList.remove('active');
});

let products = [
    {
        image:'nikealphafly2.png',
        id : 1,
        name: "Nike Alphafly2",
        discription : `Women's Road Racing Shoes`,
        colors : "2 Colours",
        price : 215.97
    }
    ,
    {
        image: 'nikealphafly21.jpg',
        id : 2,
        name: "Nike Alphafly2",
        discription : `Women's Road Racing Shoes`,
        colors : "1 Colour",
        price : 279.95
    }
    ,
    {
        image: 'nikevaporfly3.jpg',
        id : 3,
        name: "Nike Vaporfly3",
        discription : `Women's Road Racing Shoes`,
        colors : "2 Colours",
        price : 234.95
    }
    ,
    {
        image: 'nikereactinfinity3byYou.jpg',
        id : 4,
        name: "Nike React Infinity 3 By You",
        discription : `Women's Road Racing Shoes`,
        colors : "6 Colours",
        price : 179.95
    }
    ,
    {
        image: 'nikeinvincible3.jpg',
        id : 5,
        name: "Nike Invincible 3",
        discription : `Women's Road Racing Shoes`,
        colors : "5 Colours",
        price : 169.95
    }
    ,
    {
        image : 'nikereactinfinity3premium.jpg',
        id : 6,
        name: "Nike React Infinity 3 Premium",
        discription : `Women's Road Racing Shoes`,
        colors : "1 Colour",
        price : 159.95
    }
    ,
    {
        image: 'nikevaporfly2.jpg',
        id : 7,
        name: "Nike Vaporfly 2",
        discription : `Women's Road Racing Shoes`,
        colors : "1 Colour",
        price : 157.47
    }
    ,
    {
        image: 'nikevaporfly21.jpg',
        id : 8,
        name: "Nike Vaporfly 2",
        discription : `Women's Road Racing Shoes`,
        colors : "2 Colours",
        price : 157.47
    }
    ,
    {
        image: 'nikezoomfly5.jpg',
        id : 9,
        name: "Nike Zoom Fly 5",
        discription : `Women's Road Racing Shoes`,
        colors : "4 Colours",
        price : 152.95
    }
    ,
    {
        image:'nikezoomfly51.jpg',
        id : 10,
        name: "Nike Zoom Fly 5",
        discription : `Women's Road Racing Shoes`,
        colors : "1 Colour",
        price : 152.95
    }
];


let cardLists = [];

function cardListss(){
    products.forEach((value,key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class="title">${value.name}"</div>
        <div class="discription">${value.discription}"</div>
        <div class="colors">${value.colors}</div>
        <div class="price">$${value.price}"</div>
        <button onclick="addToCard(${key})">Add To Cart</button>

        `;
        list.appendChild(newDiv);

    });
}

cardListss();

function addToCard(key){
    if(cardLists[key] == null){
        // copy product form list to list card
        cardLists[key] = JSON.parse(JSON.stringify(products[key]));
        cardLists[key].quantity = 1;
    }
    cartCard();
}

function cartCard(){
    cardlist.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    cardLists.forEach((value, key) => {
        totalPrice += value.price;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.discription}</div>
            <div>${value.colors}</div>
            <div>$${value.price}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            cardlist.appendChild(newDiv);
            
        }
    });
    total.innerText = totalPrice.toLocaleString();
}

cartCard();

function changeQuantity(key, quantity)
{
    if(quantity == 0){
        delete cardLists[key];
    }
    else{
        cardLists[key].quantity = quantity;
        cardLists[key].price = quantity * products[key].price;
    }
    cartCard();
}


function myFunction() {
    var x = document.getElementById("card");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }