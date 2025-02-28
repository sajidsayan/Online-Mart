const copyDiscountCoupon = document.getElementById('discount-coupon')

copyDiscountCoupon.addEventListener('click' , function(){
    
    const discountText = copyDiscountCoupon.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = discountText;
    document.body.appendChild(textarea);


    textarea.select();
    textarea.setSelectionRange(0 , 99999);
    document.execCommand('copy')

    document.body.removeChild(textarea);
    copyDiscountCoupon.innerText = "Copied!";

    setTimeout(() => {
        copyDiscountCoupon.textContent = discountText;
    },1500);
})



const couponButton = document.getElementById('coupon-button')
const purchaseButton = document.getElementById('purchase-button')
const totalPriceElement = document.getElementById('total-price')
const totalDiscount = document.getElementById('total-discount')
const priceAfterDiscount = document.getElementById('price-after-discount')
const cartItem = document.getElementById('cart-item')

let itemList = [];
let totalPrice = 0;
let discount = 0;

couponButton.disabled = true;
purchaseButton.disabled = true;

function additem(item, price){
    itemList.push({ name: item, price: price})
    totalPrice += price
    updatePrice();
}

function removeitem(index){
    if (index >= 0 && index < itemList.length){
        totalPrice -= itemList[index].price;
        itemList.splice(index, 1);
        updatePrice();
    }
}

function updatePrice(){
    totalPriceElement.innerText = totalPrice.toFixed(2);
    discount = 0;
    totalPriceElement.innerText = discount.toFixed(2);
    priceAfterDiscount.innerText = (totalPrice - discount).toFixed(2)
    purchaseButton.disabled = totalPrice === 0;
    couponButton.disabled = totalPrice < 100000
    renderList()
}
