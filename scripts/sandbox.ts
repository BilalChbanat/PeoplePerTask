//dark/light mode switcher
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon') as HTMLElement;
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon') as HTMLElement;
const themeToggleBtn = document.getElementById('theme-toggle') as HTMLButtonElement;
const dropDown = document.querySelector("#selectThemeDropdown") as HTMLDivElement;

//handle theme switch
const toggleLightTheme = (): void => {
    document.documentElement.classList.remove("dark");
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
    localStorage.setItem("color-theme", "light");
}

const toggleDarkTheme = (): void => {
    document.documentElement.classList.add("dark");
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add("hidden");
    localStorage.setItem("color-theme", "dark");
}

const handleThemeSwitch = () => {
    const rootClasses: Array<string> = ["transition", "duration-100"];
    rootClasses.forEach((rootClass: string) => document.documentElement.classList.add(rootClass));
    if (!('color-theme' in localStorage)) {
        toggleLightTheme();
    } else if (localStorage.getItem("color-theme") === "auto") {
        window.matchMedia('(prefers-color-scheme: dark)').matches ? toggleDarkTheme() : toggleLightTheme();
    } else if (localStorage.getItem('color-theme') === 'dark') {
        toggleDarkTheme();
    } else {
        toggleLightTheme();
    }
}

//toggle default theme
document.addEventListener("DOMContentLoaded", handleThemeSwitch);

//handle dropdownMenu toggle
const toggleThemeDropdown = (): void => {
if (dropDown.classList.contains("hidden")) {
    dropDown.classList.remove("hidden");
    setTimeout(() => {
        dropDown.classList.add("opacity-100");
    }, 1);
} else {
    console.log("accessed")
    dropDown.classList.remove("opacity-100");
    setTimeout(() => {
        dropDown.classList.add("hidden");
    }, 300);
}
}

//close dropdown on outside click
const handleOutsideClick = (element: HTMLElement, event: Event) => {
    const target = event.target as HTMLElement;
    if (target !== dropDown && !element.contains(target) && element.classList.contains("opacity-100")) 
        toggleThemeDropdown();
}

window.addEventListener("click", handleOutsideClick.bind(null, dropDown))

themeToggleBtn && themeToggleBtn.addEventListener("click", toggleThemeDropdown);

//toggle theme
const handleThemeSwitchBtnClick = (index: number) => {
    if (index === 0) {
        window.matchMedia('(prefers-color-scheme: dark)').matches ? toggleDarkTheme() : toggleLightTheme();
        localStorage.setItem("color-theme", "auto");
    } else if (index === 1) {
        toggleLightTheme();
    } else {
        toggleDarkTheme();
    }
}

if (dropDown) {
    for (const [index, child] of [...dropDown.children].entries())
        child.addEventListener("click", handleThemeSwitchBtnClick.bind(null, index));  
}

