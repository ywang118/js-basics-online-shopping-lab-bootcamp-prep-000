var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var a = {}
  a.itemName = item 
  a.itemPrice = Math.floor(Math.random()*100 +1)
  cart.push(a)
  return (`${item} has been added to your cart.`)
}

function viewCart() {
 if (!cart.length){
   return "Your shopping cart is empty."
 } 
 var cartDescription = 'In your cart, you have '
  if (cart.length >= 1 ){
    cartDescription += `${cart[0].itemName} at $${cart[0].itemPrice}`
  }
  if (cart.length >= 2) {
     var middleCartItemsDescription = ''
     for(let i = 1; i<cart.length-1;i++) {
       middleCartItemsDescription  += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
  }
    cartDescription += `${middleCartItemsDescription}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
