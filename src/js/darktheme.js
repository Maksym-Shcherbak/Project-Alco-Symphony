const themeToggle = document.getElementById('theme-toggle'); 
const body = document.body; themeToggle.addEventListener('input', () => { if (themeToggle.value === '1') { // If the slider is at 1, switch to the dark theme body.classList.add('dark-theme'); } else { // If the slider is at 0, switch back to the light theme body.classList.remove('dark-theme'); } });
