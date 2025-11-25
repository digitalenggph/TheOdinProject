/*

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}



function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]



function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered = cats.filter(lCat);
console.log(filtered);
// [ "Leopard", "Lion" ]

*/

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered = cats.filter(cat => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]