import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


// import  "../data/car.js";
// import  "../data/backend-practice.js";


// async wait

async function loadPage()
{
    await loadProductFetch();

    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3');
        });
    })
    renderOrderSummary();
    renderPaymentSummary();
    rendercheckoutHeader();
}

loadPage();


// promise is a class

/*
Promise.all([
    loadProductFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((value) => {
    console.log(value);
    
    renderOrderSummary();
    renderPaymentSummary();
    rendercheckoutHeader();
})


new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    })

}).then((value) => {
    console.log(value);
    
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
    rendercheckoutHeader();
});


loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
        rendercheckoutHeader();
    });
})

*/