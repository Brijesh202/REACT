const firstBasket = document.querySelector('.basket-1 span');
const secondBasket = document.querySelector('.basket-2 span');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

let totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightArrow.addEventListener('click', () => {
    if(firstBasketAppleCount > 0){
        firstBasketAppleCount -= 1;
        secondBasketAppleCount += 1;
        firstBasket.innerText = firstBasketAppleCount;
        secondBasket.innerText = secondBasketAppleCount;
    };
});


leftArrow.addEventListener('click', () => {
    if(secondBasketAppleCount > 0){
        firstBasketAppleCount += 1;
        secondBasketAppleCount -= 1;
        firstBasket.innerText = firstBasketAppleCount;
        secondBasket.innerText = secondBasketAppleCount;
    };
});