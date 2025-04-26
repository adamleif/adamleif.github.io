/* 
Dark Mode adapted from: 
https://oakharborwebdesigns.com/blog/how-to-add-dark-mode-to-your-website/#blog-post 
*/

document.addEventListener('DOMContentLoaded', () => {
	function enableDarkMode() {
		document.body.classList.add('dark-mode');
		sunToggle = document.body.getElementsByClassName("cs-sun")[0];
		sunToggle.setAttribute("aria-hidden", "true");

		moonToggle = document.body.getElementsByClassName("cs-moon")[0];
		moonToggle.setAttribute("aria-hidden", "false");

		localStorage.setItem('theme', 'dark');
	}

	function disableDarkMode() {
		document.body.classList.remove('dark-mode');

		moonToggle = document.body.getElementsByClassName("cs-moon")[0];
		moonToggle.setAttribute("aria-hidden", "true");

		sunToggle = document.body.getElementsByClassName("cs-sun")[0];
		sunToggle.setAttribute("aria-hidden", "false");

		localStorage.setItem('theme', 'light');
	}

	// Determines a new user's dark mode preferences
	function detectColorScheme() {
		// Default to the light theme
		let theme = 'light';

		// Check localStorage for a saved 'theme' variable
		if (localStorage.getItem('theme')) {
			theme = localStorage.getItem('theme');
		}
		// Check browser preferences for dark mode
		else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = 'dark';
		}

		// Apply the detected theme
		theme === 'dark' ? enableDarkMode() : disableDarkMode();
	}

	// Run on page load
	detectColorScheme();

	// Add event listener to the dark mode button toggle
	document.getElementById('dark-mode-toggle').addEventListener('click', () => {
		// Toggle dark mode based on current theme
		localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();
	});
});
