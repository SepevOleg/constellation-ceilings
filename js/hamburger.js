let headerMenuBtn = document.querySelector('.header-menu_btn');
let headerTopmenu = document.querySelector('.header-hamburger');
headerMenuBtn.addEventListener('click', function(){
	console.log(headerTopmenu)
	headerTopmenu.classList.toggle('active');
	// headerTopmenu.classList.toggle('active');
	headerTopmenu.addEventListener('click', () => {
		console.log(headerTopmenu)
		headerTopmenu.classList.remove('active');
	})
	// headerTopmenu.classList.toggle('active');
})