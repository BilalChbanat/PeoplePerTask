"use strict";
//dark/light mode switcher
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');
const dropDown = document.querySelector("#selectThemeDropdown");
//handle theme switch
const toggleLightTheme = () => {
    document.documentElement.classList.add("light");
    themeToggleDarkIcon.classList.remove('hidden');
    localStorage.setItem("color-theme", "light");
};
const toggleDarkTheme = () => {
    document.documentElement.classList.add("dark");
    themeToggleLightIcon.classList.remove('hidden');
    localStorage.setItem("color-theme", "dark");
};
const handleThemeSwitch = () => {
    if (!('color-theme' in localStorage)) {
        toggleLightTheme();
    }
    else if (localStorage.getItem("color-theme") === "auto") {
        window.matchMedia('(prefers-color-scheme: dark)').matches ? toggleDarkTheme() : toggleLightTheme();
    }
    else if (localStorage.getItem('color-theme') === 'dark') {
        toggleDarkTheme();
    }
    else {
        toggleLightTheme();
    }
};
//toggle default theme
document.addEventListener("DOMContentLoaded", handleThemeSwitch);
//handle dropdownMenu toggle
const handleThemeToggle = () => {
    if (dropDown.classList.contains("hidden")) {
        dropDown.classList.remove("hidden");
        setTimeout(() => {
            dropDown.classList.add("opacity-100");
        }, 1);
    }
    else {
        dropDown.classList.remove("opacity-100");
        setTimeout(() => {
            dropDown.classList.add("hidden");
        }, 300);
    }
};
const handleOutsideClick = (element, event) => {
    const target = event.target;
    if (target !== dropDown && !element.contains(target) && element.classList.contains("opacity-100"))
        handleThemeToggle();
};
window.addEventListener("click", handleOutsideClick.bind(null, dropDown));
themeToggleBtn && themeToggleBtn.addEventListener("click", handleThemeToggle);
if (dropDown) {
    for (let child of dropDown.children) {
    }
}
