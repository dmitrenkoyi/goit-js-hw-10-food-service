export function changeTheme() {
    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    };

    const bodyEl = document.querySelector('body');
    const themeToggleEl = document.querySelector('#theme-switch-toggle');

    themeToggleEl.addEventListener('change', onThemeChange);

    function onThemeChange() {
        if (themeToggleEl.checked) {
            bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
            
            localStorage.setItem('theme', Theme.DARK);
        } else {
            bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
            localStorage.setItem('theme', Theme.LIGHT);
        }
    }

    function setTheme() {
    bodyEl.classList.add(Theme.LIGHT);

    if (localStorage.getItem('theme')) {
      bodyEl.classList.add(localStorage.getItem('theme'));
    }

    if (bodyEl.classList.contains(Theme.DARK)) {
      themeToggleEl.checked = true;
    }
    }
    setTheme();
}