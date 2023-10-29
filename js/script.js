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

document.addEventListener("DOMContentLoaded", function(){
  $('.project-wrapper').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: true
    // prevArrow:"<img class='a-left control-c prev slick-prev' src='images/icons8-previous-50.png'>",
    // nextArrow:"<img class='a-right control-c next slick-next' src='images/icons8-next-50.png'>"
  });
});
