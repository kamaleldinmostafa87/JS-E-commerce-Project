//object in js
// localStorage.setItem('name','hamza');

// get key of name if not exist >> console.log >>null
// localStorag.getItem('name');

// localStorag.removeItem('name');

// let navInfo = document.querySelector(".nav-info");
// let userInfo = document.querySelector(".user-info");
// let user = document.querySelector(".user");
// let logoutBtn = document.querySelector(".logout");

// if (localStorage.getItem("username") != null) {
//   navInfo.style.display = "none";
//   userInfo.style.display = "flex";
//   user.innerHTML = localStorage.getItem("username");
// }

// logoutBtn.addEventListener("click", () => {
//   localStorage.clear();
//   setTimeout(() => {
//     window.location = "register.html";
//   }, 1500);
// });

let products = [
  {
    id: 1,
    imgUrl: "./imgs/camera.jpg",
    title: "Camera",
    span: "medium",
  },
  {
    id: 2,
    imgUrl: "./imgs/headphone.jpg",
    title: "Head Phone",
    span: "medium",
  },
  {
    id: 3,
    imgUrl: "./imgs/glasses.jpg",
    title: "Glasses",
    span: "small",
  },
  {
    id: 4,
    imgUrl: "./imgs/airpods.jpg",
    title: "AirPods",
    span: "small",
  },
];

let productsDB = localStorage.setItem("productsDB", JSON.stringify(products));
function UI(productsDB) {

  let productsDrowUi = productsDB.map((item) => {
    return `
           <div class="product-item">
           <img src=${item.imgUrl} alt="" class="product-item-img">
              <div class="product-item-describtion">
                  <h2>${item.title}</h2>
                  <p>Lorem ipsum dolor .</p>
                  <span>${item.span} size</span>
              </div>
  
              <div class="product-item-action">
                  <button class="add-to-card" onClick ='addToCart(${item.id})'>
                      add to card
                  </button>
                  <li class="far fa-heart favourite"></li>
              </div>
           </div>
      `;
  
  }).join('');
  
  let productsDom = document.querySelector('.products');
  productsDom.innerHTML = productsDrowUi;
}

UI(products);
// *Notes >> find return an object 
// *Notes >> filter return an arrray


let increasedSpan = document.querySelector('.user-info li i span');
let cartProductsDiv = document.querySelector('.cart-products div');
let cartShoppingIcon = document.querySelector('.cartshopping');
let localStoragArray = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

if (localStoragArray) {
    localStoragArray.map(item => {
        cartProductsDiv.innerHTML += `<p>${item.title}</p>`
    })
    increasedSpan.innerHTML += localStoragArray.length;
}
function addToCart(id) {
    if(localStorage.getItem('username')){
        let choosenItem = products.find(item => item.id == id);
        // Notes >> +
        // get choosen item putting it in notification div
        // all p in div 
        localStoragArray = [...localStoragArray, choosenItem];
        // object to string
        localStorage.setItem('products', JSON.stringify(localStoragArray));
        cartProductsDiv.innerHTML += `<p>${choosenItem.title}</p>`;
        // first method to increase span
        // increasedSpan.innerHTML = +increasedSpan.innerHTML + 1;
        // second method to increase span
        let cartProductsItems = document.querySelectorAll('.cart-products div p');
        increasedSpan.innerHTML = cartProductsItems.length;
        } else {
        window.location = 'login.html';
    }
}

// if(localStoragArray) {
//     increasedSpan.innerHTML = localStoragArray.length;
// }


let cartProducts = document.querySelector('.cart-products');
cartShoppingIcon.addEventListener('click', openCloseCart);

function openCloseCart() {
        if(cartProductsDiv.innerHTML != ''){
    cartProducts.classList.toggle('open-close');
    }
}
// function chackAccountLogin() {
//    
// }

let searchBtn = document.querySelector('#search');

searchBtn.addEventListener('keyup', (e) => {
  if(e.keyCode == 13) {
    search(e.target.value, JSON.parse(localStorage.getItem('productsDB')));
  }
  if(e.target.value.trim() === '') 
    UI(JSON.parse(localStorage.getItem('productsDB')));
});

function search(title, myArray){
  let restored = myArray.filter(item => item.title == title);
  UI(restored);
}

