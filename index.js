const bars = document.querySelector("#bar");
const close = document.querySelector("#close-menu")
console.log(close)
const mainMenu = document.querySelector("#main-menu");

bars.addEventListener("click", function (e) {
    mainMenu.classList.add("open-menu")

})
close.addEventListener("click", function () {
    mainMenu.classList.remove("open-menu")

})