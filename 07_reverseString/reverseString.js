const reverseString = function(string) {
    string = "" + string;
    let stringArr = string.split('');
    let stringLen = stringArr.length;
    let reversedString = "";

    for(let i=0; i < stringLen; i++) {
        reversedString += stringArr.pop();
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
