//initialize the count to 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el")

function increment() {
    count++
    countEl.innerText = (count)
    console.log(count)
}


function greeting(firstName) {
    console.log("Hello " + firstName)
}

greeting('simon')

function toUpper(str) {
    console.log(str.toUpperCase())
}

toUpper('rbeans')

function inchToCm(length) {
    console.log(length * 2.54)
}

inchToCm(5)

const button = document.getElementById('greet-button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click',greet)


let isBirthday = undefined;
let greetingTest = ( isBirthday ) ? 'Happy Birthday Ryan' : 'Good morning Ryan';
console.log(greetingTest);

let expr = 'lemons';
switch (expr) {
    case 'Oranges':
        console.log("Oranges taste good");
        break;
    case 'Beans':
        console.log("beans are good");
        break;
    case 'lemons':
    case 'grapes':
        console.log("lemons and grapes taste good");
        break;
    default:
        console.log("what do you want")
}

let choice = 'sunny'
let temperature = 80

if (choice === 'sunny') {
    if (temperature < 86) {
        console.log(`It is ${temperature} degrees outside`)
    } else if (temperature >= 86) {
        console.log(`It is ${temperature} degrees outside. you will die from heat`)
    }
};
    
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `you press "${event.key}".`);

function add7(num) {
    return (num + 7);
}

function multiply(num1,num2) {
    console.log(num1 * num2);
}

multiply(5,3);


function divide() {
    let divided = prompt('pick a number to divide');
    let half = divided / 2;
    alert(`${half} is half your number`);
}

function capitalize(string) {
    let lowerCase = string.toLowerCase();
    console.log((lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)));
    
}

capitalize("asaDDFdfdDF");

function lastLetter(word) {
    console.log(word.slice(-1))
}

lastLetter("ryan");

