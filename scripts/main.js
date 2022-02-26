// document.getElementById('menu-icon').addEventListener('click', () => {
// 	document.getElementById('nav-list').classList.toggle('visible');
// });

// document.querySelectorAll('.nav__item-link').forEach((el) => {
// 	el.addEventListener('click', function (e) {
// 		document.getElementById('nav-list').classList.toggle('visible');
// 	});
// });

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplaySpeed: 1000,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 3,
		},
	},
});
