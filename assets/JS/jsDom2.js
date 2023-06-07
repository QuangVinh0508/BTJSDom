const body = document.querySelector('body')
const range = document.querySelector('.range__bar')
const rangeBar = document.querySelector('.range__bar-content')

function setRangeBar(percent) {
	rangeBar.style.width = `${percent}%`
	rangeBar.querySelector('span').innerText = `${percent}%`
	body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}

setRangeBar(70)

range.addEventListener('mousemove', function (e) {
	const process = e.pageX - this.offsetLeft;
	let percent = (process / this.offsetWidth) * 100;

	percent = Math.ceil(percent)
	setRangeBar(percent)
})