const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listDivImg = $$('.list__img div');
const next = $('.next');
const prev = $('.prev');
const imgWrap = $('.carousel__img img');

let currentIndex = 0;
setCurrent(currentIndex)

function setCurrent(index) {
	currentIndex = index
	imgWrap.src = listDivImg[currentIndex].querySelector('img').src

	// remove all active img
	listDivImg.forEach((item) => {
		item.classList.remove('active');
	})

	// set active
	listDivImg[currentIndex].classList.add('active')
}

listDivImg.forEach((img, index) => {
	img.addEventListener('click', (e) => {
		setCurrent(index)
	})
})

next.addEventListener('click', () => {
	if (currentIndex == listDivImg.length - 1) {
		currentIndex = 0
	} else currentIndex++

	setCurrent(currentIndex)
})

prev.addEventListener('click', () => {
	if (currentIndex == 0) currentIndex = listDivImg.length - 1
	else currentIndex--

	setCurrent(currentIndex);
})