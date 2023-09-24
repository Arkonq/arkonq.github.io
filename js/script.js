const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

document.addEventListener("click", (event) => {
	if(event.target.closest('.header__burger')) {
		menu.classList.toggle('active');
		burger.classList.toggle('active');
		document.body.classList.toggle('lock');
	}
	if(!event.target.closest('.header__burger')) {
		menu.classList.remove('active');
		burger.classList.remove('active');
		document.body.classList.remove('lock');
	}	
});