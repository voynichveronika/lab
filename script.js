

function p1()
{

const squares = document.querySelectorAll('.square');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');
const h1 = document.querySelector('h1');
const modeButtons = document.querySelectorAll('.mode');

let colorDisplay = document.getElementById('colorDisplay');
let numSquares = 3;
let colors = [];
let pickedColor;

init();

colorDisplay.textContent = pickedColor;


resetButton.addEventListener('click', () => {
    reset();
});

function changeColor(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function randomColor() {
    let red = Math.floor(Math.random() * 256);

    let green = Math.floor(Math.random() * 256);

    let blue = Math.floor(Math.random() * 256);

    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}



function init() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', () => {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[i].classList.add('selected');

            modeButtons[i].textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
    
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
        clickedColor = squares[i].style.background;

        if (clickedColor === hex2rgb(pickedColor)) {

            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColor(clickedColor);
            h1.style.background = '#fff';
        } else {
            squares[i].style.background = '#fff';
            messageDisplay.textContent = 'Try Again';
        }
        });
    } 

    reset();
}




function reset () {

    const radio = document.querySelectorAll('input[type="radio"]')

radio.forEach(el => {
    el.onclick = (e) => {
    show(e.target.value)
  }
})

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = "white";
    resetButton.textContent = 'New Level';
    messageDisplay.textContent = '';         
}
}

function p2()
{

const squares = document.querySelectorAll('.square');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');
const h1 = document.querySelector('h1');
const modeButtons = document.querySelectorAll('.mode');

let colorDisplay = document.getElementById('colorDisplay');
let numSquares = 6;
let colors = [];
let pickedColor;

init();

colorDisplay.textContent = pickedColor;


resetButton.addEventListener('click', () => {
    reset();
});

function changeColor(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function randomColor() {
    let red = Math.floor(Math.random() * 256);

    let green = Math.floor(Math.random() * 256);

    let blue = Math.floor(Math.random() * 256);

    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}



function init() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', () => {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[2].classList.remove('selected');
            modeButtons[3].classList.remove('selected');
            modeButtons[4].classList.remove('selected');
            modeButtons[i].classList.add('selected');

            modeButtons[i].textContent === 'Meduim' ? numSquares = 6 : numSquares = 9;
    
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
        clickedColor = squares[i].style.background;

        if (clickedColor === hex2rgb(pickedColor)) {

            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColor(clickedColor);
            h1.style.background = white;
        } else {
            squares[i].style.background = '#fff';
            messageDisplay.textContent = 'Try Again';
        }
        });
    } 

    reset();
}

function reset () {

    const radio = document.querySelectorAll('input[type="radio"]')

radio.forEach(el => {
    el.onclick = (e) => {
    show(e.target.value)
  }
})

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = "white";
    resetButton.textContent = 'New Level';
    messageDisplay.textContent = '';         
}
}

function p3()
{

const squares = document.querySelectorAll('.square');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');
const h1 = document.querySelector('h1');
const modeButtons = document.querySelectorAll('.mode');

let colorDisplay = document.getElementById('colorDisplay');
let numSquares = 9;
let colors = [];
let pickedColor;

init();

colorDisplay.textContent = pickedColor;


resetButton.addEventListener('click', () => {
    reset();
});

function changeColor(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function randomColor() {
    let red = Math.floor(Math.random() * 256);

    let green = Math.floor(Math.random() * 256);

    let blue = Math.floor(Math.random() * 256);

    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}



function init() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', () => {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[2].classList.remove('selected');
            modeButtons[3].classList.remove('selected');
            modeButtons[4].classList.remove('selected');
            modeButtons[5].classList.remove('selected');
            modeButtons[6].classList.remove('selected');
            modeButtons[7].classList.remove('selected');
            modeButtons[i].classList.add('selected');

            modeButtons[i].textContent === 'Hard' ? numSquares = 9 : numSquares = 12;
    
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
        clickedColor = squares[i].style.background;

        if (clickedColor === hex2rgb(pickedColor)) {

            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColor(clickedColor);
            h1.style.background = white;
        } else {
            squares[i].style.background = '#fff';
            messageDisplay.textContent = 'Try Again';
        }
        });
    } 

    reset();
}

function reset () {

    const radio = document.querySelectorAll('input[type="radio"]')

radio.forEach(el => {
    el.onclick = (e) => {
    show(e.target.value)
  }
})

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = "white";
    resetButton.textContent = 'New Level';
    messageDisplay.textContent = '';         
}
}

function rbtn1()
{
document.querySelector('.v2').innerHTML = '';
document.querySelector('.v3').innerHTML = '';

const squares = document.querySelectorAll('.square');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');
const h1 = document.querySelector('h1');
const modeButtons = document.querySelectorAll('.mode');

let colorDisplay = document.getElementById('colorDisplay');
let numSquares = 3;
let colors = [];
let pickedColor;

init();

colorDisplay.textContent = pickedColor;


resetButton.addEventListener('click', () => {
    reset();
});

function changeColor(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function randomColor() {
    let red = Math.floor(Math.random() * 256);

    let green = Math.floor(Math.random() * 256);

    let blue = Math.floor(Math.random() * 256);

    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}



function init() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', () => {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[i].classList.add('selected');

            modeButtons[i].textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
    
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
        clickedColor = squares[i].style.background;

        if (clickedColor === hex2rgb(pickedColor)) {

            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColor(clickedColor);
            h1.style.background = '#fff';
        } else {
            squares[i].style.background = '#fff';
            messageDisplay.textContent = 'Try Again';
        }
        });
    } 

    reset();
}




function reset () {

    const radio = document.querySelectorAll('input[type="radio"]')

radio.forEach(el => {
    el.onclick = (e) => {
    show(e.target.value)
  }
})

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = "white";
    resetButton.textContent = 'New Level';
    messageDisplay.textContent = '';         
}
}


function rbtn2()
{
document.querySelector('.v1').innerHTML = '';
document.querySelector('.v3').innerHTML = '';
const squares = document.querySelectorAll('.square');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');
const h1 = document.querySelector('h1');
const modeButtons = document.querySelectorAll('.mode');

let colorDisplay = document.getElementById('colorDisplay');
let numSquares = 6;
let colors = [];
let pickedColor;

init();

colorDisplay.textContent = pickedColor;


resetButton.addEventListener('click', () => {
    reset();
});

function changeColor(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function randomColor() {
    let red = Math.floor(Math.random() * 256);

    let green = Math.floor(Math.random() * 256);

    let blue = Math.floor(Math.random() * 256);

    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}



function init() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', () => {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[2].classList.remove('selected');
            modeButtons[3].classList.remove('selected');
            modeButtons[4].classList.remove('selected');
            modeButtons[i].classList.add('selected');

            modeButtons[i].textContent === 'Meduim' ? numSquares = 6 : numSquares = 9;
    
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
        clickedColor = squares[i].style.background;

        if (clickedColor === hex2rgb(pickedColor)) {

            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColor(clickedColor);
            h1.style.background = white;
        } else {
            squares[i].style.background = '#fff';
            messageDisplay.textContent = 'Try Again';
        }
        });
    } 

    reset();
}

function reset () {

    const radio = document.querySelectorAll('input[type="radio"]')

radio.forEach(el => {
    el.onclick = (e) => {
    show(e.target.value)
  }
})

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = "white";
    resetButton.textContent = 'New Level';
    messageDisplay.textContent = '';         
}
}


function rbtn3()
{
document.querySelector('.v1').innerHTML = '';
document.querySelector('.v2').innerHTML = '';
const squares = document.querySelectorAll('.square');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');
const h1 = document.querySelector('h1');
const modeButtons = document.querySelectorAll('.mode');

let colorDisplay = document.getElementById('colorDisplay');
let numSquares = 9;
let colors = [];
let pickedColor;

init();

colorDisplay.textContent = pickedColor;


resetButton.addEventListener('click', () => {
    reset();
});

function changeColor(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


function randomColor() {
    let red = Math.floor(Math.random() * 256);

    let green = Math.floor(Math.random() * 256);

    let blue = Math.floor(Math.random() * 256);

    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}



function init() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', () => {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[2].classList.remove('selected');
            modeButtons[3].classList.remove('selected');
            modeButtons[4].classList.remove('selected');
            modeButtons[5].classList.remove('selected');
            modeButtons[6].classList.remove('selected');
            modeButtons[7].classList.remove('selected');
            modeButtons[i].classList.add('selected');

            modeButtons[i].textContent === 'Hard' ? numSquares = 9 : numSquares = 12;
    
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
        clickedColor = squares[i].style.background;

        if (clickedColor === hex2rgb(pickedColor)) {

            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            changeColor(clickedColor);
            h1.style.background = white;
        } else {
            squares[i].style.background = '#fff';
            messageDisplay.textContent = 'Try Again';
        }
        });
    } 

    reset();
}

function reset () {

    const radio = document.querySelectorAll('input[type="radio"]')

radio.forEach(el => {
    el.onclick = (e) => {
    show(e.target.value)
  }
})

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = "white";
    resetButton.textContent = 'New Level';
    messageDisplay.textContent = '';         
}
}

