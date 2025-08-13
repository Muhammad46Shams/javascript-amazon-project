export const cart = [];

export function addToCart(productId, quantity, quantitySelectorValue) 
{
  let matchingItem;

  console.log(cart);
  

  cart.forEach((cartItem) => {
      if(productId == cartItem.productId)
      {
          matchingItem = cartItem;
      }
  })

  if(matchingItem)
  {
    matchingItem.quantity += quantitySelectorValue;
  }
  else {
    cart.push({
      productId,
      quantity 
    });
  }

}

