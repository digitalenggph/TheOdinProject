function add7 (a) {
    return a + 7;
}

function multiply (a, b) {
    return a * b;
}

function capitalize(string) {
    stringLower =  string.toLowerCase().split('');
    firstLetter = stringLower.shift().toUpperCase();
    return firstLetter + stringLower.join('');
}

function lastLetter(string) {
    return string.at(-1);
}