const input = document.querySelector("input");
const para = document.querySelector("p");
const btn = document.querySelector("button");


btn.addEventListener("click", () => {
    para.textContent = "";
    let startNum = parseInt(input.value);

    for (let i=1; i <= startNum; i++){
        testPrimeNumber(i) ? para.textContent += `${i} `: "";
    }
});

function testPrimeNumber(number) {
    let factorsArray = [];
    let i = number;
    while (i >= 1) {
        if (number % i == 0){
            factorsArray.push(i);
        }
        i--;
    }

    return factorsArray.length === 2
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