const letters = "أاإآبتثجحخدذرزسشصضطظعغفقكلمنهويabcdefghijklmnopqrstuvwxyz0123456789";
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");

    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);

    span.className = "letter-box";

    lettersContainer.appendChild(span); });

const words = {
   برمجة: ["PHP", "JavaScript", "GO", "Scala", "Fortran", "R", "Mysql", "Python", "HTML", "CSS",
   "C", "Cpp", "Csharp", "SQL", "Sass", "Visul Studio Code", "Github", "TypeScript", "أ", "قلب",
   "خوارزميات", "قواعد بيانات", "Java", "Code", "NodeJS", "Assembly", "DjanGo", "Bootstrap"],
   أشخاص: ["محمد", "أحمد", "مصطفى", "عبدالله", "عبدالرحمن", "علي", "معاوية", "يزيد", "ناصر",
   "سفيان", "فيصل", "عباس", "عبدالكريم", "مبارك", "أنمار", "سبأ", "نورة", "فاطمة", "عائشة",
   "نزار", "سارة", "حميدة", "حصة", "رامي", "عيسى", "إسماعيل", "وليد", "إبراهيم", "هود", "شعيب",
   "صالح", "إدريس", "عامر", "عمير", "سلمان", "عبدالعزيز", "سعود", "رياض", "فالح", "رقية", "مريم",
   "آدم", "نوح", "عدنان", "شفيق", "مهند", "طراد", "خالد", "أكرم", "عبدالإله", "عبده", "مها"],
   دول: ["سوريا", "فلسطين", "اليمن", "مصر", "البحرين", "قطر", "إندونيسيا", "السعودية", "أرمينيا",
   "ماليزيا", "بلجيكا", "بريطانيا", "أمريكا", "الصين", "اليونان", "اليابان", "السودان", "العراق",
   "الأردن", "لبنان", "المغرب", "الجزائر", "موريتانيا", "جزر القمر", "ألمانيا", "كندا", "المكسيك",
   "الفلبين", "الصومال", "فرنسا", "إسبانيا", "قبرص", "تركيا", "كوسوفو", "إيطاليا", "روسيا",
   "المجر", "الهند", "تشيلي", "منغوليا", "إيران", "كازاخستان", "باكستان", "أوكرانيا", "بولندا",
   "أنغولا", "أفغانستان", "تونس", "ألبانيا", " أنتيغوا وباربودا", "الأرجنتين", "البرتغال", "بليز"],
   سيارة: ["Toyota Camry", "GMC Sierra", "Toyota Yaris", "Bugatti Chiron", "Lamborghini Uras",
   "Lamborghini Aventador", "Nissan GTR", "Nissan Skyline", "Audi R8", "Porsche Panamera", "Porsche Macan",
   "Porsche 911 GT3", "BMW M5", "BMW M3", "BMW I8", "BMW X5", "BMW M2", "BMW M4", "BMW M6", "BMW X6",
   "Toyota Supra MK4", "Toyota Supra MK5", "Toyota Highlander", "GMC Yukon", "GMC Yukon Denali"] }

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach(letter => {
  let emptySpan = document.createElement("span");

  if (letter === " ") {
    emptySpan.className = "with-space"; }

  lettersGuessContainer.appendChild(emptySpan); });

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();

    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {

      if (theClickedLetter == wordLetter) {
        theStatus = true;

        guessSpans.forEach((span, spanIndex) => {

          if (WordIndex === spanIndex) {
            span.innerHTML = theClickedLetter; } }); } });

    if (theStatus !== true) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      document.getElementById("fail").play();

      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished"); } }
      else {
        document.getElementById("success").play(); } } });

function toggle() {
    var blur = document.getElementById("background");
    blur.classList.toggle("blur");

    var popup = document.querySelector(".popup");
    popup.classList.toggle("active"); }

function endGame() {
    let div = document.createElement("div");

    let divText = document.createTextNode(`" عوافي عوافي 🗿 الكلمة هي " ${randomValueValue}`);
    div.appendChild(divText);

    div.className = "popup";

    document.body.appendChild(div);

    toggle(); }