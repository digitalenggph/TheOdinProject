const container = document.querySelector("#container")

/* Item # 1 */
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.cssText = "color:red";
container.appendChild(para);


/* Item # 2 */
const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3"
heading3.style.cssText = "color:blue"
container.appendChild(heading3)

/* Item #3 */
const div = document.createElement("div")
div.setAttribute("style", 
    `
    background-color:pink;
    border: 1px solid black;
    `
    );

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
div.appendChild(heading1)

const paraDiv = document.createElement("para");
paraDiv.textContent = "ME TOO!"
div.appendChild(paraDiv)

const body = document.querySelector("body")    
body.appendChild(div)

/*

Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
    - another <h1> that says “I’m in a div”
    - a <p> that says “ME TOO!”
    - Hint for this one: after creating the <div> with createElement, 
      append the <h1> and <p> to it before adding it to the container.

*/