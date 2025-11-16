const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (0 <= a && 0 <= b) {
            abArr = [a, b].sort((x, y) => x - y);
            smallNum = abArr.at(0)
            bigNum = abArr.at(1)
            let sum = 0;

            for (let i=smallNum; i <= bigNum; i++) {
                sum += i
            }
            return sum

        } else {
            return 'ERROR'
        }
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
