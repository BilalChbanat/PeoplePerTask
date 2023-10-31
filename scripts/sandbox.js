"use strict";
//dark/light mode switcher
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');
const dropDown = document.querySelector("#selectThemeDropdown");
//handle theme switch
const toggleLightTheme = () => {
    document.documentElement.classList.remove("dark");
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
    localStorage.setItem("color-theme", "light");
};
const toggleDarkTheme = () => {
    document.documentElement.classList.add("dark");
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add("hidden");
    localStorage.setItem("color-theme", "dark");
};
const handleThemeSwitch = () => {
    const rootClasses = ["transition", "duration-100"];
    rootClasses.forEach((rootClass) => document.documentElement.classList.add(rootClass));
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
const toggleThemeDropdown = () => {
    if (dropDown.classList.contains("hidden")) {
        dropDown.classList.remove("hidden");
        setTimeout(() => {
            dropDown.classList.add("opacity-100");
        }, 1);
        setTimeout(() => {
            dropDown.classList.remove("opacity-0");
        }, 1);
    }
    else {
        dropDown.classList.remove("opacity-100");
        dropDown.classList.add("opacity-0");
        setTimeout(() => {
            dropDown.classList.add("hidden");
        }, 200);
    }
};
//close dropdown on outside click
const handleOutsideClick = (element, event) => {
    const target = event.target;
    if (target !== dropDown && !element.contains(target) && element.classList.contains("opacity-100"))
        toggleThemeDropdown();
};
window.addEventListener("click", handleOutsideClick.bind(null, dropDown));
themeToggleBtn && themeToggleBtn.addEventListener("click", toggleThemeDropdown);
//toggle theme
const handleThemeSwitchBtnClick = (index) => {
    if (index === 0) {
        window.matchMedia('(prefers-color-scheme: dark)').matches ? toggleDarkTheme() : toggleLightTheme();
        localStorage.setItem("color-theme", "auto");
    }
    else if (index === 1) {
        toggleLightTheme();
    }
    else {
        toggleDarkTheme();
    }
};
if (dropDown) {
    for (const [index, child] of [...dropDown.children].entries())
        child.addEventListener("click", handleThemeSwitchBtnClick.bind(null, index));
}
