const circles = document.querySelectorAll(".circle"),
progressBar = document.querySelector(".indicator"),
buttons = document.querySelectorAll("button"),
modeSwitch = document.querySelector(".mode-switch"),
body = document.querySelector("body");

let currentStep = 1;

const updateSteps = (e) => {
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active"); });

progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

if (currentStep === circles.length) {
    buttons[1].disabled = true; }
else if (currentStep === 1) {
   buttons[0].disabled = true; }
else {
   buttons.forEach((button) => (button.disabled = false)); } };

buttons.forEach((button) => {
    button.addEventListener("click", updateSteps); });

if (localStorage.getItem("mode") === "الوضع المظلم") {
    body.classList.add("dark");
    modeSwitch.textContent = "الوضع الفاتح"; }
    
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    const isDarkMode = body.classList.contains("dark");
        
    modeSwitch.textContent = isDarkMode ? "الوضع الفاتح" : "الوضع المظلم";
    localStorage.setItem("mode", isDarkMode ? "الوضع المظلم" : "الوضع الفاتح"); });