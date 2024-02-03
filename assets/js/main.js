const bars = document.querySelector(".fa-bars")
const menu = document.querySelector(".headerRight ul")
const overlay = document.querySelector(".overlay")


bars.addEventListener("click", () => {
    menu.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", () => {
    menu.classList.remove("active")
    overlay.classList.remove("active")
})





// popup functionality
const popupFormWrap = document.querySelector(".popupFormWrap")
const popupOverlay = document.querySelector(".popupOverlay")
const pricingBuyBtn = document.querySelectorAll(".pricingMainCard button")


pricingBuyBtn.forEach(item => {
    item.addEventListener("click", () => {
        popupFormWrap.classList.add("active")
    })
})

popupOverlay.addEventListener("click", () => {
    popupFormWrap.classList.remove("active")
})