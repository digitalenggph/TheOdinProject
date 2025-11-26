const input = document.querySelector("input");
const para = document.querySelector("p");
const btn = document.querySelector("button");

para.textContent = "";

btn.addEventListener("click", () => {
    let startNum = parseInt(input.value);

    let i = 1;
    while (i < startNum) {
        if (testPrimeNumber(i) == true) {
            para.textContent += `${i} `
        };
        i++;           
    }

});

function testPrimeNumber(number) {
    let i = number;
    while (i > 1) {
        if (number % i == 0){
            i--;
            continue; 
        } 
        return true; 
    }
}



// Repeat until the input is correct
/*
let i = 0;
while (i < 100) {
    let number = parseInt(prompt("Input number greater than 100."));
    i = number;
}

// Better solution

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

*/