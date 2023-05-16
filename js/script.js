const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".mobile-nav");
const exitButton = document.querySelector(".exit-button");


hamburgerButton.addEventListener("click",() => {
  mobileNav.classList.toggle("display-none")
  exitButton.classList.toggle("display-none")
  hamburgerButton.classList.toggle("display-none")

})

exitButton.addEventListener("click",() => {
  mobileNav.classList.toggle("display-none")
  exitButton.classList.toggle("display-none")
  hamburgerButton.classList.toggle("display-none")
})