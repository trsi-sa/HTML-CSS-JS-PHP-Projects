const body = document.querySelector("body"),
modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "الوضع المظلم") {
    body.classList.add("dark");
    modeSwitch.textContent = "الوضع الفاتح"; }

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDarkMode = body.classList.contains("dark");
    
    modeSwitch.textContent = isDarkMode ? "الوضع الفاتح" : "الوضع المظلم";
    localStorage.setItem("mode", isDarkMode ? "الوضع المظلم" : "الوضع الفاتح"); });