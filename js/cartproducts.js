// let getProducts = localStorage.getItem('products');
let productsDom = document.querySelector('.products');
// console.log(getProducts);


let cartProductsDiv = document.querySelector('.cart-products div');
let cartShoppingIcon = document.querySelector('.cartshopping');
let cartProducts = document.querySelector('.cart-products');
cartShoppingIcon.addEventListener('click', openCloseCart);


function openCloseCart() {
    if(cartProductsDiv.innerHTML != ''){
        cartProducts.classList.toggle('open-close');
    }
}

// if (getProducts) {
//     let items = JSON.parse(localStorage.getItem('products'));
//     productsDrowUi(items);
// }
let noProducts = document.querySelector('.no-products');
function productsDrowUi(products = []) {
    let allProducts = JSON.parse(localStorage.getItem('products')) || products;
    if (allProducts.length === 0) {
        noProducts.innerHTML = 'NO Products Choosen!';
    }
    let productsUi = allProducts.map((item) => {
        return `
               <div class="product-item">
               <img src=${item.imgUrl} alt="" class="product-item-img">
                  <div class="product-item-describtion">
                      <a onClick="saveItemId(${item.id})">${item.title}</a>
                      <p>Lorem ipsum dolor .</p>
                      <span>${item.span} size</span>
                  </div>
      
                  <div class="product-item-action">
                      <button class="add-to-card" onClick ='removeFromCart(${item.id})'>
                          Remove
                      </button>
                      <li class="far fa-heart favourite"></li>
                  </div>
               </div>
          `;
      
      }).join('');

productsDom.innerHTML = productsUi;
};

productsDrowUi();

function removeFromCart (id) {
    let allItems = JSON.parse(localStorage.getItem('products'));
    if(allItems) {
        // let items = JSON.parse(getProducts);

        let filteredItems = allItems.filter((item) =>item.id !== id);
        console.log(filteredItems);
        localStorage.setItem('products',JSON.stringify(filteredItems));
        productsDrowUi(filteredItems);
    }
}

// Set Id of Products
function saveItemId(id){
    localStorage.setItem('ids',id);
    window.location = 'cartDetails.html';
}
