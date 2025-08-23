import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import formatCurrency from "../utils/money.js";
import { addOrder } from "../../data/orders.js";

export function renderPaymentSummary() 
{
    let productPriceCents = 0;
    let shippingPriceCents = 0;

    let quantityItems = 0;

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        const product = getProduct(productId);
        productPriceCents += product.priceCents * cartItem.quantity;
        
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;

        quantityItems +=cartItem.quantity;
    });
    
    const totalBeforeTexCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTexCents * 0.1;

    const totlCents = totalBeforeTexCents + taxCents;

    const paymentSummaryHtml = `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${quantityItems}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTexCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totlCents)}</div>
        </div>

        <button class="place-order-button button-primary js-place-order">
            Place your order
        </button>
    `;
        
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;

    document.querySelector('.js-place-order')
            .addEventListener('click', async() => {
                try {
                    const response = await fetch('https://supersimplebackend.dev/orders', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            cart: cart
                        })
                    });
                    
                    const orders =  await response.json()
                    addOrder(orders);
               
                } catch (error) {
                    console.log('unexpected error, try again later');
                    
                }

                window.location.href = 'orders.html';
            })
}
