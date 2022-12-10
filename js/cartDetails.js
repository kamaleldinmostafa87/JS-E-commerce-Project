let getProductsInCart = JSON.parse(localStorage.getItem('products'));
let getId = localStorage.getItem('ids');


let productId = getProductsInCart.find(item => item.id == getId);

let itemDetailsDom = document.querySelector('.item-details');
// function drowproduct () {
//     return `
       
//     `
// }

itemDetailsDom.innerHTML = `<img src="${productId.imgUrl}" alt="">
    <h2>${productId.title}</h2>
    <span>${productId.span}</span>
`