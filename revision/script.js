let p = document.querySelector(".operatorp").innerText;
let s = document.querySelector(".operators").innerText;
let m = document.querySelector(".operatorm").innerText;
let d = document.querySelector(".operatord").innerText;


let chance = Math.floor(10 * Math.random());
if (chance === 1) {

    p = document.querySelector(".operators").innerText; // + becomes -
    s = document.querySelector(".operatord").innerText; // - becomes /
    m = document.querySelector(".operatorp").innerText; // * becomes +
    d = document.querySelector(".operatorm").innerText; // / becomes *
}

function operate(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Err";
        default: return NaN;
    }
}
console.log(chance);
const screen = document.getElementById("screen");
let current = "";
let operator = "";
let firstNum = null;


document.querySelectorAll(".num").forEach(btn => {
    btn.addEventListener("click", () => {
        current += btn.innerText;
        screen.value = current;
    });
});


document.querySelector(".operatorp").addEventListener("click", () => setOperator(p));
document.querySelector(".operators").addEventListener("click", () => setOperator(s));
document.querySelector(".operatorm").addEventListener("click", () => setOperator(m));
document.querySelector(".operatord").addEventListener("click", () => setOperator(d));

function setOperator(op) {
    if (current === "") return;
    firstNum = parseFloat(current);
    operator = op;
    current = "";
    screen.value = operator;
}


document.getElementById("equals").addEventListener("click", () => {
    if (firstNum === null || current === "" || operator === "") return;
    let secondNum = parseFloat(current);
    let result = operate(firstNum, secondNum, operator);
    screen.value = result;
    current = "";
    firstNum = null;
    operator = "";
});


document.getElementById("clear").addEventListener("click", () => {
    current = "";
    firstNum = null;
    operator = "";
    screen.value = "";
});
