document.querySelector('.search__btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})
