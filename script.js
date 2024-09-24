// Typing Animation Script
const texts = ["a programmer", "a UX/UI designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingElement = document.getElementById("typing");

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;
    if (letter.length === currentText.length) {
        setTimeout(() => {
            deleteText();
        }, 2000);
    } else {
        setTimeout(type, 100);
    }
})();

function deleteText() {
    if (index > 0) {
        letter = currentText.slice(0, --index);
        typingElement.textContent = letter;
        setTimeout(deleteText, 50);
    } else {
        count++;
        index = 0;
        setTimeout(type, 500);
    }
}

// Custom Cursor Script
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Change cursor style on button hover
const buttons = document.querySelectorAll('a, button, .btn-portfolio');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    button.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
    document.querySelector('.cursor-label').textContent = '*click*';
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
    document.querySelector('.cursor-label').textContent = 'You';
});
