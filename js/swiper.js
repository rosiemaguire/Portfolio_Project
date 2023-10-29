// init Swiper:
const swiper = new Swiper(".swiper", {
	// Optional parameters
	// direction: 'horizontal',
	slidesPerView: 3,
	loop: true,

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 5,
			centeredSlides: true,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
			spaceBetween: 5,
		},
		// when window width is >= 640px
		1607: {
			slidesPerView: 4,
			spaceBetween: 5,
		},
	},
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
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
