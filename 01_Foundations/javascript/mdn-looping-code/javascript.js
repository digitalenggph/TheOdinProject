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