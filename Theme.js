document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeStyle = document.getElementById("theme-style");

    function loadTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }

    function setTheme(theme) {
        if (theme === "dark") {
            themeStyle.href = "DarkBoard.css";
            themeToggle.textContent = "☀️";
        } else {
            themeStyle.href = "Board.css";
            themeToggle.textContent = "🌙";
        }
        localStorage.setItem("theme", theme);
    }

    themeToggle.addEventListener("click", () => {
        const currentTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
        setTheme(currentTheme);
    });

    loadTheme();
});
