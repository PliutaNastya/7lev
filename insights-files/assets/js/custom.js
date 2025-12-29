// =======================
// BURGER MENU
// =======================
const menuButton = document.querySelector('.menu__icon');
const htmlElement = document.documentElement;
htmlElement.setAttribute('data-fls-darklite-light', '');

menuButton.addEventListener('click', () => {
	htmlElement.classList.toggle('menu-open');
});

// =======================
// DARK/LIGHT THEME TOGGLE
// =======================
const themeToggleButton = document.getElementById('theme-toggle');

function setTheme(theme) {
	if (theme === 'dark') {
		htmlElement.setAttribute('data-fls-darklite-dark', '');
		htmlElement.removeAttribute('data-fls-darklite-light');
	} else {
		htmlElement.setAttribute('data-fls-darklite-light', '');
		htmlElement.removeAttribute('data-fls-darklite-dark');
	}
	localStorage.setItem('theme', theme);
}

function toggleTheme() {
	const isDark = htmlElement.hasAttribute('data-fls-darklite-dark');
	setTheme(isDark ? 'light' : 'dark');
}

themeToggleButton.addEventListener('click', toggleTheme);

window.addEventListener('DOMContentLoaded', () => {
	const savedTheme = localStorage.getItem('theme') || 'light';
	setTheme(savedTheme);
});
