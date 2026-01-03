const fibonacci = function(number) {
    if (+number < 0) {
        return "OOPS"
    }

    let a = 0;
    let b = 1;
    let sequenceArray = [];

    for(let i=0; i<=number; i++) {
        sequenceArray.push(a)
        a = b;
        b = sequenceArray.at(-1) + b;
    }

    return sequenceArray.pop()
};

// Do not edit below this line
module.exports = fibonacci;
