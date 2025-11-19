const reverseString = function(string) {
    string = "" + string; // to make sure all entries gets converted to string
    let stringArr = string.split('');
    let stringLen = stringArr.length;
    let reversedString = "";

    //0.115s

    for(let i=0; i < stringLen; i++) {
        reversedString += stringArr.pop();
    }

    // 0.178s
    // stringArr.forEach(element => {
    //     reversedString += stringArr.pop()
    // });

    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
