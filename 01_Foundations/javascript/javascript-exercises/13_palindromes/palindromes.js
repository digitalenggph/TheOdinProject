const palindromes = function (str) {
    cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    cleanStrLen = cleanStr.length;
    cleanStrArr = cleanStr.split('');
    let midIndex;


    if (cleanStrLen % 2  == 0) {
        midIndex = (cleanStrLen / 2) - 1
    } else {
        midIndex =((cleanStrLen - 1) / 2) - 1
    }

    for (let i=0; i <= midIndex; i++) {
        let firstChar = cleanStrArr.shift();
        let lastChar = cleanStrArr.pop();

        if (firstChar != lastChar) {
            // return "" + firstChar != lastChar + i + firstChar + lastChar + cleanStrArr;
            return false
        } 
    }

    return true

};

// Do not edit below this line
module.exports = palindromes;
