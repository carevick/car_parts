const mainSubtotal = document.querySelectorAll(".subtotal-price");
const summarySubtotal = document.querySelector(".display-subtotal-price");
const shipping = document.querySelector(".display-shipping-price");
const orderTotal = document.querySelector(".order-total-price");

//Subtotal prices from <main><ul> elements
const allMainSubtotals = [
  +mainSubtotal[0].innerHTML,
  +mainSubtotal[1].innerHTML,
];
const sumOfAllMainSubtotals = allMainSubtotals.reduce(sumAllMainSubtotals);

function sumAllMainSubtotals(total, value) {
  return total + value;
}
// console.log(sumOfAllMainSubtotals); // 400

//Display all subtotals sum in summary, then add shipping to calculated subtotal and display result in order total
const subtotalValue = sumOfAllMainSubtotals; // 150 + 250 = 400
const shippingValue = +shipping.innerHTML; //5
const orderTotalSum = subtotalValue + shippingValue; // 400 + 5 = 405
let currency = "$";

function displaySummarySubtotal() {
  summarySubtotal.innerHTML = currency + sumOfAllMainSubtotals.toFixed(2);
}
displaySummarySubtotal();

function displayOrderTotal() {
  orderTotal.innerHTML = currency + orderTotalSum.toFixed(2);
}
displayOrderTotal();
