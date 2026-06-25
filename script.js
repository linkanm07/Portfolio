
const texts = [
"Full Stack Web Developer",
"MERN Stack Developer",
"React Developer",
"Node.js Developer",
"Frontend Specialist"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
if (count === texts.length) {
count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if (letter.length === currentText.length) {
setTimeout(() => {
index = 0;
count++;
type();
}, 1500);
} else {
setTimeout(type, 80);
}
})();
