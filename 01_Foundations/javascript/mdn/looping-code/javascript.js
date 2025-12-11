const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const petPeeve = ["Phil", "Lola"]

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

for (const person of people) {
    if (petPeeve.includes(person)) {
        refused.textContent += `${person}, `;
    } else {
        admitted.textContent += `${person}, `;
    };    
};

admitted.textContent = admitted.textContent.slice(0, -2);
refused.textContent = refused.textContent.slice(0, -2);

/*
const output = document.querySelector(".output");
const heading = document.querySelector(".heading")
const btn = document.querySelector("button");
const ONESECOND = 1000

output.textContent = "";

btn.addEventListener("click", () => {
    for (let i = 10; i >= 0; i--) {
         const para = document.createElement("p");
        
        setTimeout(function() { 
            if (i == 10) {
                para.textContent = "Countdown 10";
            } else if (i == 0) {
                para.textContent = "Blast off!";
            } else {
                para.textContent = i;
            }
            output.appendChild(para);
        }, (10 - i) * ONESECOND);
    }
});
*/