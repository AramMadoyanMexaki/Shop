const shirts__btn = document.querySelector(".to-shirts-section");
const trousers__btn = document.querySelector(".to-trousers-section");
const sneakers__btn = document.querySelector(".to-sneakers-section")
const sneakers = document.querySelector(".sneakers");
const shirts = document.querySelector(".shirts");
const trousers = document.querySelector(".trousers");

shirts__btn.addEventListener("click", function() {
    sneakers.classList.remove("active");
    sneakers.classList.add("inactive");
    shirts.classList.remove("inactive");
    shirts.classList.add("active");
    trousers.classList.remove("active");
    trousers.classList.add("inactive");
});

sneakers__btn.addEventListener("click", function() {
    sneakers.classList.remove("inactive");
    sneakers.classList.add("active");
    shirts.classList.remove("active");
    shirts.classList.add("inactive");
    trousers.classList.remove("active");
    trousers.classList.add("inactive");
});

trousers__btn.addEventListener("click", function() {
    sneakers.classList.remove("active");
    sneakers.classList.add("inactive");
    shirts.classList.remove("active");
    shirts.classList.add("inactive");
    trousers.classList.remove("inactive");
    trousers.classList.add("active");
});