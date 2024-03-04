/* ==================================== Hints start ==================================== */ 

const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Click on buttons with hints
for (let btn of infoBtns) {
	btn.addEventListener('click', function (e) {
		e.stopPropagation();

		// Hide all hint
		for (let hint of infoHints) {
			if (this.parentNode.querySelector('.info-hint') !== hint) {
				hint.classList.add('none');
			}
		}

		// Show current hint
		this.parentNode.querySelector('.info-hint').classList.toggle('none');
	});
}

// Close tooltips when clicking on the entire document
document.addEventListener('click', function () {
	for (let hint of infoHints) {
		hint.classList.add('none');
	}
});

// Prevent the click event from popping up when clicking on tooltips
for (let hint of infoHints) {
	hint.addEventListener('click', (e) => e.stopPropagation());
}

/* ==================================== Hints end ==================================== */ 


/* ==================================== Swiper slider start ==================================== */ 

const swiper = new Swiper('.swiper', {
	// loop: true,
	// freeMode: true,

	slidesPerView: 1,
	spaceBetween: 42,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
});

/* ==================================== Swiper slider end ==================================== */

/* ==================================== Tabs start ==================================== */

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {

	btn.addEventListener('click', function () {
		// Remove active classes from all buttons
		for (let btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active');
		}

		// Adding an active class to the current button
		this.classList.add('tab-controls__btn--active');

		// Display the products you need and hide the ones you don’t need
		for (let product of tabsProducts) {

			// Checking to see all slides are displayed
			if (this.dataset.tab === 'all') {
				product.classList.remove('none');
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none');
				} else {
					product.classList.add('none');
				}
			}
		}

		// Update Swiper
		swiper.update()

	})
}

/* ==================================== Tabs end ==================================== */

/* ==================================== Mobile Nav start ==================================== */

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function (){
	mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};

/* ==================================== Mobile Nav end ==================================== */