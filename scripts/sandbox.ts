//dark/light mode switcher
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon') as HTMLElement;
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon') as HTMLElement;
const themeToggleBtn = document.getElementById('theme-toggle') as HTMLButtonElement;
const dropDown = document.querySelector("#selectThemeDropdown") as HTMLDivElement;

//handle theme switch
const toggleLightTheme = (): void => {
    document.documentElement.classList.remove("dark");
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add('hidden');
    localStorage.setItem("color-theme", "light");
}

const toggleDarkTheme = (): void => {
    document.documentElement.classList.add("dark");
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add("hidden");
    localStorage.setItem("color-theme", "dark");
}

//toggle default theme
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

document.addEventListener("DOMContentLoaded", handleThemeSwitch);

//handle dropdownMenu toggle
const toggleThemeDropdown = (): void => {
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
} else {
    dropDown.classList.remove("opacity-100");
    dropDown.classList.remove("translate-y-0");
    dropDown.classList.add("opacity-0");
    dropDown.classList.add("translate-y-3")
    setTimeout(() => {
        dropDown.classList.add("hidden");
    }, 200);
}
}

themeToggleBtn && themeToggleBtn.addEventListener("click", toggleThemeDropdown);

//close dropdown on outside click
const handleOutsideClick = (element: HTMLElement, event: Event) => {
    const target = event.target as HTMLElement;
    if (target !== dropDown && !element.contains(target) && element.classList.contains("opacity-100")) 
        toggleThemeDropdown();
}

window.addEventListener("click", handleOutsideClick.bind(null, dropDown))

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
    toggleThemeDropdown();
}

if (dropDown) {
    for (const [index, child] of [...dropDown.children].entries())
        child.addEventListener("click", handleThemeSwitchBtnClick.bind(null, index));  
}

