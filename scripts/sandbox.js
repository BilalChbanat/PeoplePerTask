"use strict";
//dark/light mode switcher
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const themeToggleBtn = document.getElementById("theme-toggle");
const dropDown = document.querySelector("#selectThemeDropdown");
const burgerMenus = document.querySelectorAll(".burgerMenu");
let currenTheme = "";
//handle theme switch
const toggleLightTheme = () => {
    document.documentElement.classList.remove("dark");
    themeToggleLightIcon.classList.remove("hidden");
    themeToggleDarkIcon.classList.add("hidden");
    localStorage.setItem("color-theme", "light");
    currenTheme = "light";
};
const toggleDarkTheme = () => {
    document.documentElement.classList.add("dark");
    themeToggleDarkIcon.classList.remove("hidden");
    themeToggleLightIcon.classList.add("hidden");
    localStorage.setItem("color-theme", "dark");
    currenTheme = "dark";
};
//toggle burger icon
const toggleBurgerIcon = () => {
    burgerMenus.forEach((burgerMenu) => {
        const lightIcon = burgerMenu.querySelector("#burger-menu-dark");
        const darkIcon = burgerMenu.querySelector("#burger-menu-light");
        if (currenTheme === "dark") {
            lightIcon.classList.remove("hidden");
            darkIcon.classList.add("hidden");
        }
        else {
            darkIcon.classList.remove("hidden");
            lightIcon.classList.add("hidden");
        }
    });
};
//toggle default theme
const handleThemeSwitch = () => {
    const rootClasses = ["transition", "duration-100"];
    rootClasses.forEach((rootClass) => document.documentElement.classList.add(rootClass));
    if (!("color-theme" in localStorage)) {
        toggleLightTheme();
        currenTheme = "light";
    }
    else if (localStorage.getItem("color-theme") === "auto") {
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? toggleDarkTheme()
            : toggleLightTheme();
    }
    else if (localStorage.getItem("color-theme") === "dark") {
        toggleDarkTheme();
        currenTheme = "dark";
    }
    else {
        toggleLightTheme();
        currenTheme = "light";
    }
    toggleBurgerIcon();
};
document.addEventListener("DOMContentLoaded", handleThemeSwitch);
//handle dropdownMenu toggle
const toggleThemeDropdown = () => {
    if (dropDown.classList.contains("hidden")) {
        dropDown.classList.remove("hidden");
        setTimeout(() => {
            dropDown.classList.add("opacity-100");
            dropDown.classList.add("translate-y-0");
        }, 1);
        setTimeout(() => {
            dropDown.classList.remove("opacity-0");
            dropDown.classList.remove("translate-y-3");
        }, 99);
    }
    else {
        dropDown.classList.remove("opacity-100");
        dropDown.classList.remove("translate-y-0");
        dropDown.classList.add("opacity-0");
        dropDown.classList.add("translate-y-3");
        setTimeout(() => {
            dropDown.classList.add("hidden");
        }, 200);
    }
};
themeToggleBtn && themeToggleBtn.addEventListener("click", toggleThemeDropdown);
//close dropdown on outside click
const handleOutsideClick = (element, event) => {
    const target = event.target;
    if (target !== dropDown &&
        !element.contains(target) &&
        element.classList.contains("opacity-100"))
        toggleThemeDropdown();
};
window.addEventListener("click", handleOutsideClick.bind(null, dropDown));
//toggle theme
const handleThemeSwitchBtnClick = (index) => {
    if (index === 0) {
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? toggleDarkTheme()
            : toggleLightTheme();
        localStorage.setItem("color-theme", "auto");
    }
    else if (index === 1) {
        toggleLightTheme();
    }
    else {
        toggleDarkTheme();
    }
    toggleThemeDropdown();
    toggleBurgerIcon();
};
if (dropDown) {
    for (const [index, child] of [...dropDown.children].entries())
        child.addEventListener("click", handleThemeSwitchBtnClick.bind(null, index));
}
const handleBurgerMenuClick = () => {
    const burgerMenu = document.getElementById("navBurgerNav");
    if (burgerMenu.classList.contains("max-h-[0rem]")) {
        burgerMenu.classList.remove("max-h-[0rem]");
        burgerMenu.classList.add("max-h-[26rem]");
    }
    else {
        burgerMenu.classList.remove("max-h-[26rem]");
        burgerMenu.classList.add("max-h-[0rem]");
    }
};
burgerMenus.forEach((burgerMenu) => {
    burgerMenu.addEventListener("click", handleBurgerMenuClick);
});
