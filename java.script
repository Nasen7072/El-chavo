document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeLink = document.getElementById('theme-link');

    themeToggleButton.addEventListener('click', () => {
        if (themeLink.getAttribute('href') === 'light-theme.css') {
            themeLink.setAttribute('href', 'dark-theme.css');
            themeToggleButton.textContent = 'Modo Claro';
        } else {
            themeLink.setAttribute('href', 'light-theme.css');
            themeToggleButton.textContent = 'Modo Escuro';
        }
    });
});
