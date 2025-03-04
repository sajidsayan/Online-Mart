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
const couponCode = document.getElementById('coupon-code')

let itemList = [];
let totalPrice = 0;
let discount = 0;

couponButton.disabled = true;
purchaseButton.disabled = true;

function addItem(item, price){
    console.log(item,price)
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
    totalPriceElement.innerText = discount.toFixed(2);
    priceAfterDiscount.innerText = (totalPrice - discount).toFixed(2)
    purchaseButton.disabled = totalPrice === 0;
    couponButton.disabled = totalPrice < 100000
    renderList()
}

function renderList() {
    cartItem.innerHTML = '';
    itemList.forEach((item,index) =>{
        cartItem.innerHTML += `<div class="flex item-center justify-between">
        <span>${index + 1}. ${item.name}</span>
        <span>
        <i onclick="removeItem(${index})" class="fa-solid fa-close text-red-600 text-xl font-semibold mt-1 cursor-pointer"></i>
        </span>
        </div> `;
    });

}

couponButton.addEventListener("click" , () =>{
    const couponCode = couponCode.value.trim();
    if (couponCode === "MART1978" && totalPrice >= 100000) {
    } else{
        discount = 0;
    }
    updatePrice()
}

purchaseButton.addEventListene("click",() => {
    itemList = []
    totalPrice = 0
    discount = 0
    couponCode.value = "";
    updatePrice
});
