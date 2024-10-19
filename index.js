var display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value.replace('x', '*').replace('%', '/100'));
    } catch {
        display.value = 'Error';
    }
}

function adjustFontSize() {
    const title = document.getElementById('title');
    const width = window.innerWidth;
    if (width < 600) {
        title.style.fontSize = '20px';
    } else if (width < 900) {
        title.style.fontSize = '30px';
    } else {
        title.style.fontSize = '40px';
    }
}


adjustFontSize();


window.addEventListener('resize', adjustFontSize);

document.getElementById('eqlbtn').addEventListener('click', calculate);
document.getElementById('delete').addEventListener('click', deleteLast);
document.getElementById('mult').addEventListener('click', () => appendNumber('x'));
document.getElementById('div').addEventListener('click', () => appendNumber('/'));
document.getElementById('add').addEventListener('click', () => appendNumber('+'));
document.getElementById('sub').addEventListener('click', () => appendNumber('-'));
document.getElementById('point').addEventListener('click', () => appendNumber('.'));
document.getElementById('percent').addEventListener('click', () => appendNumber('%'));
