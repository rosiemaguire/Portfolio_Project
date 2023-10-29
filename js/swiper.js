// init Swiper:
const swiper = new Swiper(".swiper", {
	slidesPerView: "auto",
	loop: true,
	grabcursor: true,
	centeredSlides: true,
	effect: "coverflow",
	coverflow: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 2.5,
		slideShadows: true,
	},
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
		clickable: true,
	},
	autoplay: {
		delay: 20000,
		disableOnInteraction: false,
		reverseDirection: false,
},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});
